import express from "express";
import textController from "../text-controllers/controller.js";

const routes = express.Router();
routes.post('/api/prompt', textController.inputText)
.post('/api/receive', textController.receiveMessage)
.post('/api/wppreceive', textController.wppReceiveMsg)

export default routes;

