import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const useLogIn = () => {
  const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext()
  const login= async (userName,password)=>{
 setLoading(true);
    try
{
    const success=handleInputErrors({userName,password});
    if(!success)return;
const res = await fetch("/api/auth/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({userName,password})
})
const data = await res.json();
if(data.error){
    throw new Error(data.error)
}
console.log(data)
localStorage.setItem("chat-user",JSON.stringify(data))
setAuthUser(data)
}
catch(error){
toast.error(error.message);
}finally{}
setLoading(false);
  }
return {loading,login};
}

export default useLogIn

function handleInputErrors({userName,password}){
    if(!userName||!password){
        toast.error('Please fill in all fields')
        return false}
    if(password.length <6){
        toast.error('PAssword must be at least 6');
        return false;
    }
    return true;
}