import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utilis/generateTokens.js"
export const SignUpUser =async (req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender}=req.body;
      
         if(password !== confirmPassword){
            return res.status(400).json({error:"password don't match"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPAssword = await bcrypt.hash(password,salt)
        const user =await User.findOne({userName})
        if(user){
            return res.status(400).json({error:"userNAme already Exist"})
        }
        const ProfilePic="https://avatar.iran.liara.run/public"
        
        const newUser= await  User.create({
            fullName,
            userName,
            password:hashedPAssword,
            gender,
            ProfilePic
        })
        console.log(newUser)
        if(newUser){
             generateTokenAndSetCookie(newUser._id,res);
          //  await  newUser.save();
        }
       
       res.status(201).json({newUser})
    }catch(err){
        console.log("err in sign up ")
        res.status(500).json({error:err.message})
    }}
export const loginUser =async (req,res)=>{
try{
    const {password,userName}=req.body
    console.log(userName)
    const user =await User.findOne({userName})
   
    const isPasswordCorrect= await bcrypt.compare(password,user?.password||"")
if(!user || !isPasswordCorrect)
return res.status(400).json({error:'invalid username or password'})

generateTokenAndSetCookie(user._id,res);

res.status(200).json({
    fullName:user.fullName,
    userName:user.userName,
    gender:user.gender
})
}
catch(err){
console.log("Error in login contriller")
res.status(500).json({erroe: err.message})
}

}
export const logOutUser =(req,res)=>{
try{
res.cookie("jwt","",{maxAge:0})
res.status(200).json({message : "Logged out successfuly"})
}catch(error){
    res.status(500).json({error:"internal server error"})
}


}
