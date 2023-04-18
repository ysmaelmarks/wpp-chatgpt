import express from "express";
import msgController from "../controllers/controller.js";

const routes = express.Router();
    routes.post('/api/receive', msgController.sendMessage)
        .post('/api/wppreceive', msgController.wppMsgOpenAI);

export default routes;

