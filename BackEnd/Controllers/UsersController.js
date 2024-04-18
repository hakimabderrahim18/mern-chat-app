import User from "../models/userModel.js";

export const getUserSideBar = async (req,res)=>{
    try{
        const loggedInUserId = req.user._id;
        const allUsers= await User.find({_id:{$ne : loggedInUserId}}).select("-password")


        res.send(allUsers)
    }
    catch(error){
        console.log("error in getUsersForSideBar : ",error.message );
        res.status(500).json({error: "internal server error"})

    }

}