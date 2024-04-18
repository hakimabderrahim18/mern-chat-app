import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

const protectRoute=async (req,res,next)=>{
   try {
const token = req.cookies.jwt;
if(!token)
return res.status(401).json({error:"unauthorized"})
const decoded = jwt.verify(token,"jhgfdfghjklkjhgfdghjkjhg")
if(!decoded)
return res.status(401).json({error:"unauthorized"})
const user =await  User.findById(decoded.userId)
req.user=user;
if(!user) {
    res.status(400).json({error:"user not found"}) 
}
next();
   }
    catch(error){
        console.log("error in protected Route MiddleWare")
        res.status(500).json({
            error: "internal serve error"
        })
    }
}
export default protectRoute;