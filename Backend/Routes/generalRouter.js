import express from "express";
import { generalGet } from "../Controllers/generalGet.js";

const generalRouter = express.Router();

generalRouter.get("/", generalGet);

export { generalRouter };
