import express from "express";
import fs from "fs";
import multer from "multer";
import { getProjects } from "../Controllers/getProjects.js";
import { postProjects } from "../Controllers/postProjects.js";
const projectsRouter = express.Router();

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

projectsRouter.get("/", getProjects);
projectsRouter.post("/", upload.single("file"), postProjects());

export { projectsRouter };
