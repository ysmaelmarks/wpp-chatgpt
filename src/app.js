import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import bodyParser from "body-parser"
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(routes)

export default app;