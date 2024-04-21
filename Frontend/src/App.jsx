import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './Context/AuthContext'

function App() {
  const {authUser}=useAuthContext();
  console.log(authUser)
  return (
    
  <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={authUser?<Home/>:<Navigate to='/login'/>}/>
      <Route path='/login' element={authUser?<Navigate to='/'/> :<Login/>}/>
      <Route path='/signUp' element={authUser?<Navigate to='/'/> :<SignUp/>}/>
       </Routes>
    <Toaster/>
       
  </div>

      
  )
}

export default App
