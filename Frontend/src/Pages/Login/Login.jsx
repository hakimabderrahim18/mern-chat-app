import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogIn from '../../Hooks/useLogIn';




const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const {loading,login}=useLogIn()

  const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(userName,password)
  await login(userName,password);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'> 
      <span className='text-blue-500'>Chat App  </span>
      Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'> 
          <span className='text-base label-text'>User Name</span>
          </label>
          <input type="text" placeholder='Enter UserName' className='w-full input input-bordered h-10'value={userName} onChange={(e)=>setUserName(e.target.value)} />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'> Password</span>
          </label>
          <input type="password" placeholder='Enter Password'className='w-full input input-bordered h-10' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <Link to="/signUp"className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Don't Have An account ? 
        </Link>
        <div>
        {loading ? <span className='loading loading-spinner mx-auto'></span>: <button className='btn btn-block btn-sm mt-2'>Login</button>}
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login


/*Starter Code 
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'> 
      <span className='text-blue-500'>Chat App  </span>
      Login</h1>
      <form>
        <div>
          <label className='label p-2'> 
          <span className='text-base label-text'>User Name</span>
          </label>
          <input type="text" placeholder='Enter UserName' className='w-full input input-bordered h-10' />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'> Password</span>
          </label>
          <input type="password" placeholder='Enter Password'className='w-full input input-bordered h-10' />
        </div>
        <a href="#"className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Don't Have An account ? 
        </a>
        <div>
          <button className='btn btn-block btn-sm mt-2'>Login</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
*/