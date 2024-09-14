import express from "express";
import { getExperiences } from "../Controllers/getExperience.js";
import { postExperiences } from "../Controllers/postExperience.js";

const experienceRouter = express.Router();

experienceRouter.get("/", getExperiences);
experienceRouter.post("/", postExperiences());

export { experienceRouter };
