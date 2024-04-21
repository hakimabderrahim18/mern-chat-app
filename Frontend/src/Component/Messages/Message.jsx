import React from 'react'
import { useAuthContext } from '../../Context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utilis/extractTime';

const Message = ({message}) => {
 
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe = message.senderId===authUser.id;
  const chatClassNAme= fromMe ? 'chat-end':'chat-start' 
  const profilePic = fromMe ? authUser.profilePic:selectedConversation.profilePic;
  const bubbleBgColor= fromMe ? 'bg-blue-500':"";
  console.log("id",fromMe)
  return (
    <div className={`chat ${chatClassNAme}`}>
      <div className='chat-image avatar'>
        
        <div className='w-10 rounded-full '>
            <img src={profilePic} alt="personne" />
            </div> 
        </div>
        <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer text-white '>{extractTime( message.createdAt)}</div>
    </div>
  )
}

export default Message
/*import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        
        <div className='w-10 rounded-full '>
            <img src="https://avatar.iran.liara.run/public" alt="personne" />
            </div> 
        </div>
        <div className='chat-bubble text-white bg-blue-500'>Hi What is Up</div>
        <div className='chat-footer text-white '>12:45</div>
    </div>
  )
}

export default Message
*/