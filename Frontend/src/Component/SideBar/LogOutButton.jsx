import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogOut from '../../Hooks/useLogOut'
const LogOutButton = () => {
  const {loading,logOut}=useLogOut()
  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'onClick={logOut}/>
    </div>
  )
}

export default LogOutButton

/*import React from 'react'
import {BiLogOut} from 'react-icons/bi'
const LogOutButton = () => {
  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
    </div>
  )
}

export default LogOutButton
*/