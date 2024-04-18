import authRoutes from "./Routes/authRoutes.js"
import MessagesRoutes from "./Routes/MessagesRoutes.js"
import UserRouter from "./Routes/UserRouter.js";

import express from "express";
import dotenv from"dotenv"
import connectToMongoDb from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app =express();

const PORT = process.env.PORT||5000;

app.use(express.json())
app.use(cookieParser())

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log("mongo db running")
    console.log(`server running on ${PORT}`)
})


app.use("/api/auth",authRoutes);
app.use("/api/messages",MessagesRoutes);
app.use("/api/users",UserRouter)