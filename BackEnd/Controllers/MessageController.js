import Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js'
import { getReceiverSocketId, io } from '../socket/socket.js';
export const sendMessage= async (req,res)=>{
    try{
            const {message}= req.body;
            const {id:receiverId} = req.params;
            const senderId= req.user._id


            var conversation=await Conversation.findOne({participants:{$all : [senderId,receiverId]} })
           if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
           }
           const newMessage = new Message({senderId,receiverId,message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }



        await conversation.save();
        await newMessage.save();
        //Promise.all(conversation.save(),newMessage.save())

        const receiverSocketId=getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("nesMessage",newMessage)
        }

        console.log(newMessage)
      
        
            res.status(201).json(newMessage);
    }catch(err){
console.log("error in sendMEssage controller"+err.message)
res.status(500).json({ 
    error:"internal server error"
})
    }
}
export const getMessages = async (req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({participants:{$all:[senderId,userToChatId]}}).populate("messages")
       if(!conversation)res.status(400).json([])

       const messages=conversation.messages;
        res.status(200).json(messages)

    }
    catch(err){}
}