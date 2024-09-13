import express from "express";
import { getSocials } from "../Controllers/getSocials.js";
import { postSocials } from "../Controllers/postSocials.js";
import { updateSocials } from "../Controllers/updateSocials.js";
import { deleteSocials } from "../Controllers/deleteSocials.js";
import fs from "fs";
import multer from "multer";
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

socialsRouter.get("/", getSocials);
socialsRouter.post("/", upload.single("file"), postSocials());
socialsRouter.patch("/", updateSocials());
socialsRouter.delete("/", deleteSocials());

export { socialsRouter };
