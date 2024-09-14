import express from "express";
import fs from "fs";
import multer from "multer";
import { getEducation } from "../Controllers/getEducation.js";
import { postEducation } from "../Controllers/postEducation.js";
const educationRouter = express.Router();

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

educationRouter.get("/", getEducation);
educationRouter.post("/", upload.single("file"), postEducation());

export { educationRouter };
