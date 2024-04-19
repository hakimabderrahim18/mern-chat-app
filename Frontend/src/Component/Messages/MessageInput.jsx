import React from 'react'
import {BsSend}from "react-icons/bs"
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white 'placeholder='type a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'> <BsSend size={35}/></button>
            
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