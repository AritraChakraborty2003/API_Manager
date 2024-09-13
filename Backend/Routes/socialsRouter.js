import express from "express";
import { getSocials } from "../Controllers/getSocials.js";
import { postSocials } from "../Controllers/postSocials.js";
import { updateSocials } from "../Controllers/updateSocials.js";
import { deleteSocials } from "../Controllers/deleteSocials.js";

const socialsRouter = express.Router();

socialsRouter.get("/", getSocials);
socialsRouter.post("/", postSocials());
socialsRouter.update("/", updateSocials());
socialsRouter.delete("/", deleteSocials());

export { socialsRouter };
