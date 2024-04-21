import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext'

const UseSignUp = () => {
  const [loading,setLoading]=useState(false)
    const {authUser,setAuthUser}=useAuthContext();

    const signUp=async({fullName,userName,password,confirmPassword,gender})=>{


    const success=handleInputErrors({fullName,userName,password,confirmPassword,gender})
    
    if(!success)return;
    
    setLoading(true)
    
    try{
        console.log(success)
        const res = await fetch("/api/auth/signUp",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmPassword,gender}),
           // mode: 'no-cors'
        })
const data = await res.json();

if(data.error){
    throw new Error(date.error)
}
//user in local Storage
localStorage.setItem("chat-user",JSON.stringify(data))
//Context
setAuthUser(data)
console.log(data)
    }
    catch(error){
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
    }
    return {loading,signUp}

}

export default UseSignUp

function handleInputErrors({fullName,userName,password,confirmPassword,gender}){
    if(!fullName||!userName||!password||!confirmPassword||!gender){
        toast.error('Please fill in all fields')
        return false}
    if(password!==confirmPassword){
    toast.error('Passwords Do not match')
    return false
    }
    if(password.length <6){
        toast.error('PAssword must be at least 6');
        return false;
    }
    return true;
}