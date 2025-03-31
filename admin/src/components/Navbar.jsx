import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
const Navbar = () => {
    const {atoken,setAtoken} = useContext(AdminContext)
    const {dtoken,setDtoken} = useContext(DoctorContext)
    
    const navigate = useNavigate()
    const logout = ()=>{
        navigate('/')
        atoken && setAtoken('')
        atoken && localStorage.removeItem('atoken')
        dtoken && setDtoken('')
        dtoken && localStorage.removeItem('dtoken')
    }

  return (
    <div className='flex items-center justify-between px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-sm'>
        <img src={assets.admin_logo} className='w-36 cursor-pointer sm:w-40' alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{atoken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-blue-400 text-white text-sm px-10 py-2 rounded-full'>Log out</button>
    </div>
  )
}

export default Navbar
