import express from "express";
import fs from "fs";
import multer from "multer";
import { getSkills } from "../Controllers/getSkills.js";
import { postSkills } from "../Controllers/postSkills.js";

const skillsRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
skillsRouter.get("/", getSkills);
skillsRouter.post("/", upload.single("file"), postSkills());
export { skillsRouter };
