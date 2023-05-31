import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app: Application = express();

//cors
app.use(cors());

//dotenv
dotenv.config();

//parse data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api-endpoints
export default app;