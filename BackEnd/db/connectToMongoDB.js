import mongoose from "mongoose";
import dotenv from"dotenv"
dotenv.config();
const connectToMongoDb=async()=>{
    try{
         await mongoose.connect("mongodb+srv://hakimaitabderrahim18:IBRhPuuF3C577yFt@cluster0.2teupfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
         console.log("connected")
    }
    catch(error){
        console.log("error connecting to mongoDB")
    }
}
export default connectToMongoDb;