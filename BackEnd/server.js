import authRoutes from "./Routes/authRoutes.js"
import MessagesRoutes from "./Routes/MessagesRoutes.js"
import UserRouter from "./Routes/UserRouter.js";

import express from "express";
import dotenv from"dotenv"
import cookieParser from "cookie-parser";
import path from 'path'


import connectToMongoDb from "./db/connectToMongoDB.js";

import { server,app } from "./socket/socket.js";

dotenv.config();


const PORT = process.env.PORT||5000;


const __dirname= path.resolve()


app.use(express.json())
app.use(cookieParser())

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log("mongo db running")
    console.log(`server running on ${PORT}`)
})


app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.use("/api/auth",authRoutes);
app.use("/api/messages",MessagesRoutes);
app.use("/api/users",UserRouter)
app.get("*",(req,res)=>{
    res.send(path.join(__dirname,"Frontend","dist","index.html"))
})