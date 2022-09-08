const express = require("express");
const isAdminCheck = require("../middlewares/isAdminCheck");
const isNanCheck = require("../middlewares/isNanCheck");
const { Faq } = require("../models");
const models = require("../models");

const router = express.Router();

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////// - FAQ - ///////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

router.post("/list", async (req, res, next) => {
  const { page, search, orderType } = req.body;

  const LIMIT = 10;

  const _page = page ? page : 1;
  const _search = search ? search : "";

  const __page = _page - 1;
  const OFFSET = __page * 10;

  const _orderType = parseInt(orderType) || 2;

  try {
    const lengthQuery = `
      SELECT	  ROW_NUMBER () OVER(ORDER BY createdAt)	  AS num,
                id,
                question,
                answer,
                isDelete,
                DATE_FORMAT(createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
                DATE_FORMAT(updatedAt, "%Y년 %m월 %d일") 		AS updatedAt
        FROM	faqs				
       WHERE	isDelete = FALSE
         ${_search !== `` ? `AND question LIKE '%${_search}%'` : ``}
      `;

    const selectQuery = `
      SELECT	  ROW_NUMBER () OVER(ORDER BY createdAt)	AS num,
                id,
                question,
                answer,
                isDelete,
                DATE_FORMAT(createdAt, "%Y년 %m월 %d일")		AS viewCreatedAt,
                DATE_FORMAT(updatedAt, "%Y년 %m월 %d일") 		AS updatedAt
          FROM	faqs				
         WHERE	isDelete = FALSE
          ${_search !== `` ? `AND question LIKE '%${_search}%'` : ``}
        ORDER    BY  num ${_orderType === 1 ? `ASC` : `DESC`}
        LIMIT    ${LIMIT}
       OFFSET    ${OFFSET}
      `;

    const length = await models.sequelize.query(lengthQuery);
    const faqs = await models.sequelize.query(selectQuery);

    const faqLen = length[0].length;

    const lastPage = faqLen % LIMIT > 0 ? faqLen / LIMIT + 1 : faqLen / LIMIT;

    return res
      .status(200)
      .json({ faqs: faqs[0], lastPage: parseInt(lastPage) });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ목록을 불러올 수 없습니다.");
  }
});

router.post("/admin/list", isAdminCheck, async (req, res, next) => {
  let selectQ = `
  SELECT	id,
          ROW_NUMBER() OVER(ORDER BY createdAt)	AS	num,
          question,
          answer,
          DATE_FORMAT(createdAt, "%Y년 %m월 %d일") 	AS	viewCreatedAt,
          DATE_FORMAT(updatedAt , "%Y년 %m월 %d일") 	AS	viewUpdatedAt
    FROM	faqs		
   WHERE	isDelete = 0
   ORDER  BY  createdAt DESC
  `;

  try {
    const result = await models.sequelize.query(selectQ);

    return res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(401).send("데이터를 조회할 수 없습니다.");
  }
});

router.post("/create", isAdminCheck, async (req, res, next) => {
  const { question, answer } = req.body;

  try {
    const createResult = await Faq.create({
      question,
      answer,
    });

    if (!createResult) {
      return res.status(401).send("처리중 문제가 발생하였습니다.");
    }

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 추가할 수 없습니다.");
  }
});

router.patch("/update", isAdminCheck, async (req, res, next) => {
  const { id, question, answer } = req.body;

  const updateQ = `
    UPDATE  faqs
       SET  question = "${question}",
            answer = "${answer}",
            updatedAt = now()
     WHERE  id = ${id}
  `;

  try {
    await models.sequelize.query(updateQ);

    return res.status(200).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 수정할 수 없습니다.");
  }
});

router.patch("/delete", isAdminCheck, async (req, res, next) => {
  const { id } = req.body;

  try {
    const exFaq = await Faq.findOne({
      where: { id: parseInt(id), isDelete: false },
    });

    if (!exFaq) {
      return res.status(401).send("존재하지 않는 FAQ게시글 입니다.");
    }

    const updateResult = await Faq.update(
      {
        isDelete: true,
      },
      {
        where: { id: parseInt(id) },
      }
    );

    if (updateResult[0] > 0) {
      return res.status(200).json({ result: true });
    } else {
      return res.status(200).json({ result: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).send("FAQ를 수정할 수 없습니다.");
  }
});

module.exports = router;
