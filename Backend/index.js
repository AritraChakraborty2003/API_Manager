import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DBConnectFunction from "./Connection/dbConnect.js";

//Application Configuration

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Database Connection
DBConnectFunction(process.env.MONGODB_URI);

//Listen to App
app.listen(PORT, () => {
  console.log(`Backend Connected at port ${PORT}`);
});
