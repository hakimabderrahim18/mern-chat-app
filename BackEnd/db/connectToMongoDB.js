import mongoose from "mongoose";
import dotenv from"dotenv"
dotenv.config();
const connectToMongoDb=async()=>{
    try{
         await mongoose.connect("mongodb+srv://hakimaitabderrahim18:ByHqerlw9ZVK3EDX@cluster0.iqoratl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
         
         console.log("connected")
    }
    catch(error){
        console.log("error connecting to mongoDB")
    }
}
export default connectToMongoDb;