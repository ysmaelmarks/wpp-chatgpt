import express from "express";
import textController from "../text-controllers/controller.js";

const routes = express.Router();
routes.post('/api/prompt', textController.inputText)
routes.post('/api/receive', textController.receiveMessage);

export default routes;

