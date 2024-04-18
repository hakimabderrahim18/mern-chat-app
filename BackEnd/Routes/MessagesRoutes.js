import express from "express";
import { getMessages, sendMessage } from "../Controllers/MessageController.js";
import protectRoute from "../middleWare/protectRoute.js";

const MessagesRoutes =express.Router();

MessagesRoutes.post("/send/:id",protectRoute,sendMessage)
MessagesRoutes.get("/:id",protectRoute,getMessages);
export default MessagesRoutes;