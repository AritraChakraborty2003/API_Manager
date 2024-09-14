import express from "express";
import fs from "fs";
import multer from "multer";
import { getAbouts } from "../Controllers/getAbout.js";
import { postAbouts } from "../Controllers/postAbouts.js";
const socialsRouter = express.Router();

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

const aboutRouter = express.Router();

aboutRouter.get("/", getAbouts);
aboutRouter.post("/", upload.single("file"), postAbouts());

export { aboutRouter };
