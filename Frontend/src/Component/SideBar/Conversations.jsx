import React from 'react'
import Conversation from './ConverSation'
import useGetConversation from '../../Hooks/useGetConversation';

const Conversations = () => {
  
  const {loading,conversation}=useGetConversation();
  console.log("conversations ", conversation )
  return (
    <div className='py-2 flex flex-col overflow-auto'>
     {conversation.map((conversation,indx)=>(<Conversation key={conversation?._id} conversation={conversation} lastIdx={indx===conversation.length-1}/>))}
      {loading ? <span className='loading loading-spinner mx-auto'></span>:null}
      
    </div>
  )
}

export default Conversations

/*import React from 'react'
import Conversation from './ConverSation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      
      
    </div>
  )
}

export default Conversations
*/