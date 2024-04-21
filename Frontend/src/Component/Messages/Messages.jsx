import React, { useEffect, useRef } from 'react'
import Message from './Message'
import MessageSkelton from '../Skeletons/messageSkeletons'
import useGetMessages from '../../Hooks/useGetMessages'
import useListenMessage from '../../Hooks/useListenMessage'

const Messages = () => {
const {messages,loading}=useGetMessages();
const lastMessage=useRef();
useListenMessage();
useEffect(()=>{
  console.log("mena",lastMessage.current)
lastMessage.current?.scrollIntoView({behavior:"smooth"})

},[])
console.log(messages)

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(<div ref={lastMessage}><Message key={message._id}message={message}/></div>))}
      {loading && [...Array(3)].map((_,idx)=><MessageSkelton key={idx}/>)}
      {!loading && messages.length ===0 && (<p className=' text-white text-center'>Sende Message to start a conversation</p>)}
      
    </div>
  )
}

export default Messages
/*import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>

      
    </div>
  )
}

export default Messages
*/