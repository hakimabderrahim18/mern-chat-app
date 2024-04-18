import express from "express";
import {loginUser,logOutUser,SignUpUser} from "../Controllers/authController.js"
const authRouter =express.Router();
authRouter.post("/login",loginUser)

authRouter.post("/signUp",SignUpUser)

authRouter.post("/LogOut",logOutUser)

export default authRouter;
