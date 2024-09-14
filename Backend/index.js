import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DBConnectFunction from "./Connection/dbConnect.js";
import { generalRouter } from "./Routes/generalRouter.js";
import { socialsRouter } from "./Routes/socialsRouter.js";
import { aboutRouter } from "./Routes/aboutRouter.js";
import { skillsRouter } from "./Routes/skillsRouter.js";
import { experienceRouter } from "./Routes/experienceRouter.js";
import { educationRouter } from "./Routes/educationRouter.js";
import { projectsRouter } from "./Routes/projectsRouter.js";

//Application Configuration
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.static("uploads"));
app.use(bodyParser.json());

//Database Connection
DBConnectFunction(process.env.MONGODB_URI);

//API Routes
app.use("/", generalRouter);
app.use("/socials", socialsRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectsRouter);
app.use("/skills", skillsRouter);
app.use("/experience", experienceRouter);
app.use("/education", educationRouter);

//Listen to App
app.listen(PORT, () => {
  console.log(`Backend Connected at port ${PORT}`);
});
