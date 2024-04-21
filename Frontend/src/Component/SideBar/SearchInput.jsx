import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import useConversation from '../../zustand/useConversation'
import useGetConversation from '../../Hooks/useGetConversation';
import toast from 'react-hot-toast';



const SearchInput = () => {
const [search,setSearch]=useState("");
const {setSelectedConversation}= useConversation();
const {conversation}=useGetConversation();
console.log("search",search)
const handleSubmit=(e)=>{
e.preventDefault();

if(!search)return;
if(search.length<3){
  return toast.error('Search Must Be at least 3 charachters long');
}
const conversationChosen=conversation.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
console.log(conversationChosen)
console.log('bdina')
if(conversationChosen){
  setSelectedConversation(conversationChosen)
  setSearch("")
}else toast.error('No Such Error')
console.log("w mena",conversation)
}
  return (
    <form className='flex items-center gap-2'onSubmit={handleSubmit} >
      <input type='text'placeholder='Search...'className='input input-bordered rounded-full'value={search}onChange={(e)=>{setSearch(e.target.value)}}/>
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'> <IoSearchOutline/></button>
    </form>
  )
}

export default SearchInput

/*import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2' >
      <input type='text'placeholder='Search...'className='input input-bordered rounded-full'/>
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'> <IoSearchOutline/></button>
    </form>
  )
}

export default SearchInput
*/