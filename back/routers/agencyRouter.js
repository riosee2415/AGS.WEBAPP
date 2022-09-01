const express = require("express");
const { Agency } = require("../models");
const { Op } = require("sequelize");
const isAdminCheck = require("../middlewares/isAdminCheck");

const fs = require("fs");
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log(
    "uploads 폴더가 존재하지 않습니다. 새로 uploads 폴더를 생성합니다."
  );
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_Id,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.S3_BUCKET_NAME,
    key(req, file, cb) {
      cb(
        null,
        `${
          process.env.S3_STORAGE_FOLDER_NAME
        }/original/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.post(
  "/image",
  isAdminCheck,
  upload.single("image"),
  async (req, res, next) => {
    return res.json({ path: req.file.location });
  }
);

router.get("/list", async (req, res, next) => {
  try {
    const agencys = await Agency.findAll({
      where: {
        isDelete: false,
      },
    });

    return res.status(200).json(agencys);
  } catch (error) {
    console.error(error);
    return res.status(401).send("대리점 목록을 불러올 수 없습니다.");
  }
});

router.post("/list/:agencyId", async (req, res, next) => {
  const { agencyId } = req.params;

  try {
    const exAgency = await Agency.findOne({
      where: { id: parseInt(agencyId) },
    });

    if (!exAgency) {
      return res.status(401).send("존재하지 않는 데이터 입니다.");
    }

    return res.status(200).json(exAgency);
  } catch (error) {
    console.error(error);
    return res.status(403).send("데이터를 불러올 수 없습니다.");
  }
});

router.post("/create", isAdminCheck, async (req, res, next) => {
  const { imagePath, companyName, address, number } = req.body;

  try {
    const createResult = await Agency.create({
      imagePath,
      companyName,
      address,
      number,
    });

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(401).send("새로운 데이터를 추가할 수 없습니다.");
  }
});

router.patch("/update", isAdminCheck, async (req, res, next) => {
  const { id, imagePath, companyName, address, number } = req.body;

  try {
    const exAgency = await Agency.findOne({ where: { id: parseInt(id) } });

    if (!exAgency) {
      return res.status(401).send("존재하지 않는 데이터 입니다.");
    }

    const updateResult = await Agency.update(
      {
        imagePath,
        companyName,
        address,
        number,
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
    return res.status(401).send("대리점을 수정할 수 없습니다.");
  }
});

router.delete("/delete/:agencyId", isAdminCheck, async (req, res, next) => {
  const { agencyId } = req.params;

  try {
    const exAgency = await Agency.findOne({
      where: { id: parseInt(agencyId) },
    });

    if (!exAgency) {
      return res.status(401).send("존재하지 않는 대리점 입니다.");
    }

    const updateResult = await Agency.update(
      {
        isDelete: true,
        deletedAt: new Date(),
      },
      {
        where: { id: parseInt(agencyId) },
      }
    );

    if (updateResult[0] > 0) {
      return res.status(200).json({ result: true });
    } else {
      return res.status(200).json({ result: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).send("대리점을 삭제할 수 없습니다.");
  }
});

module.exports = router;
