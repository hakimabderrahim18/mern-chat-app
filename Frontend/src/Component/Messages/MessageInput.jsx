import React, { useState } from 'react'
import {BsSend}from "react-icons/bs"

import useSendMessages from '../../Hooks/useSendMessages';
const MessageInput = () => {
  const [message,setMessage]=useState("")
  const {loading,sendMessage}=useSendMessages()
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
   if(!message)return ;
   await sendMessage(message);
   setMessage("");
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white 'placeholder='type a message'value={message}onChange={(e)=>{setMessage(e.target.value)}}/>
            {loading ? <span className='loading loading-spinner mx-auto'></span>:<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' > <BsSend size={35}/></button>
         }
            
        </div>
        

    </form>
  )
}

export default MessageInput
/*import React from 'react'
import {BsSend}from "react-icons/bs"
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full'>
            <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white 'placeholder='type a message'/>
        </div>
        <BsSend/>

    </form>
  )
}

export default MessageInput
*/