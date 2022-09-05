const express = require("express");
const { Product } = require("../models");
const { Op } = require("sequelize");
const isAdminCheck = require("../middlewares/isAdminCheck");

const router = express.Router();

router.post("/mainList", async (req, res, next) => {
  const { page, search } = req.body;

  const LIMIT = 8;

  const _page = page ? page : 1;
  const _search = search ? search : "";

  const __page = _page - 1;
  const OFFSET = __page * 8;

  try {
    const totalProducts = await Product.findAll({
      where: {
        title: {
          [Op.like]: `%${_search}%`,
        },
        isDelete: false,
      },
    });

    const productLen = totalProducts.length;

    const lastPage =
      productLen % LIMIT > 0 ? productLen / LIMIT + 1 : productLen / LIMIT;

    const products = await Product.findAll({
      offset: OFFSET,
      limit: LIMIT,
      where: {
        title: {
          [Op.like]: `%${_search}%`,
        },
        isDelete: false,
      },
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({ products, lastPage: parseInt(lastPage) });
  } catch (error) {
    console.error(error);
    return res.status(401).send("제품영상 목록을 불러올 수 업습니다.");
  }
});

router.post("/list", async (req, res, next) => {
  const { page, search } = req.body;

  const LIMIT = 10;

  const _page = page ? page : 1;
  const _search = search ? search : "";

  const __page = _page - 1;
  const OFFSET = __page * 10;

  try {
    const totalProducts = await Product.findAll({
      where: {
        title: {
          [Op.like]: `%${_search}%`,
        },
        isDelete: false,
      },
    });

    const productLen = totalProducts.length;

    const lastPage =
      productLen % LIMIT > 0 ? productLen / LIMIT + 1 : productLen / LIMIT;

    const products = await Product.findAll({
      offset: OFFSET,
      limit: LIMIT,
      where: {
        title: {
          [Op.like]: `%${_search}%`,
        },
        isDelete: false,
      },
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({ products, lastPage: parseInt(lastPage) });
  } catch (error) {
    console.error(error);
    return res.status(401).send("제품영상 목록을 불러올 수 업습니다.");
  }
});
router.post("/create", isAdminCheck, async (req, res, next) => {
  const { title, subTitle, youtubeLink } = req.body;

  try {
    const createResult = await Product.create({
      title,
      subTitle,
      youtubeLink,
    });

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("새로운 데이터를 추가할 수 없습니다.");
  }
});

router.patch("/update", isAdminCheck, async (req, res, next) => {
  const { id, title, subTitle, youtubeLink } = req.body;

  try {
    const exProduct = await Product.findOne({ where: { id: parseInt(id) } });

    if (!exProduct) {
      return res.status(401).send("존재하지 않는 데이터 입니다.");
    }

    const updateResult = await Product.update(
      {
        title,
        subTitle,
        youtubeLink,
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
    return res.status(401).send("제품영상을 수정할 수 없습니다.");
  }
});

router.delete("/delete/:productId", isAdminCheck, async (req, res, next) => {
  const { productId } = req.params;

  try {
    const exProduct = await Product.findOne({
      where: { id: parseInt(productId) },
    });

    if (!exProduct) {
      return res.status(401).send("존재하지 않는 게시글 입니다.");
    }

    const updateResult = await Product.update(
      {
        isDelete: true,
        deletedAt: new Date(),
      },
      {
        where: { id: parseInt(productId) },
      }
    );

    if (updateResult[0] > 0) {
      return res.status(200).json({ result: true });
    } else {
      return res.status(200).json({ result: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).send("게시글을 삭제할 수 없습니다.");
  }
});
router.post("/list/:productId", async (req, res, next) => {
  const { productId } = req.params;

  try {
    const exProduct = await Product.findOne({
      where: { id: parseInt(productId) },
    });

    if (!exProduct) {
      return res.status(401).send("존재하지 않는 데이터 입니다.");
    }

    return res.status(200).json(exProduct);
  } catch (error) {
    console.error(error);
    return res.status(403).send("데이터를 불러올 수 없습니다.");
  }
});

module.exports = router;
