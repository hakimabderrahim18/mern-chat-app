import express from "express";
import protectRoute from "../middleWare/protectRoute.js";
import { getUserSideBar } from "../Controllers/UsersController.js";

const UserRouter = express.Router();

UserRouter.get("/",protectRoute,getUserSideBar)

export default UserRouter;