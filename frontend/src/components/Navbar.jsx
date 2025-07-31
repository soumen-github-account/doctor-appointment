import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { FiHome } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { BsPassportFill } from "react-icons/bs";
import { IoBagAddSharp } from "react-icons/io5";
import './navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu]=useState(false)
    const {token, setToken, userData } = useContext(AppContext)
    const [color, setColor] = useState('')
    const logout = ()=>{
      setToken(false)
      localStorage.removeItem('token')
      setShowMenu(false)
    }
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/'); scrollTo(0,0)}} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-[#007E85] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-[#007E85] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/my-appointment'>
            <li className='py-1'>Appointments</li>
            <hr className='border-none outline-none h-0.5 bg-[#007E85] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-[#007E85] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-[#007E85] w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token && userData
            ? <div onClick={()=>setShowMenu(true)} className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={userData.image} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            {/* <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black curcor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-appointment')} className='hover:text-black curcor-pointer'>My Appointment</p>
                    <p onClick={logout} className='hover:text-black curcor-pointer'>Logout</p>
                </div>
            </div> */}
            </div>
            : <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-[#007E85] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button> 
        }
        {/* <img className='w-6 md:hidden' src={assets.menu_icon} alt="" /> */}
      {/* ----------mobile menu----------*/}

    <div className='bg-gray-200 nav__menu' id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
            <NavLink onClick={()=>{setColor('home'); scrollTo(0,0)}} to='/' className="nav__link active-link">
                <FiHome className={color=='home' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">Home</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('doctor'); scrollTo(0,0)}} to={'/doctors'} className="nav__link">
            <FaUserDoctor className={color=='doctor' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">All Doctors</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('appoint'); scrollTo(0,0)}} to='/my-appointment' className="nav__link">
            <IoBagAddSharp className={color=='appoint' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">Appointments</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('service') ; scrollTo(0,0)}} to='/about' className="nav__link">
                <BsPassportFill className={color=='service' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">About</span>
            </NavLink>
        </li>

        <li class="nav__item">
            <NavLink onClick={()=>{setColor('contact'); scrollTo(0,0)}} to='/contact' className='nav__link'>
                <LuContactRound className={color=='contact' ? 'text-[#007E85] nav__icon' :'nav__icon'}/>
                <span class="nav__name">Contact</span>
            </NavLink>
        </li>
    </ul>
    </div>





      <div className={`${showMenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt="" />
          <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
          <NavLink className='px-4 py-2 rounded inline-block' to='/my-profile' onClick={()=>setShowMenu(false)}>My Profile</NavLink>
          {/* <NavLink className='px-4 py-2 rounded inline-block' to='/my-appointment' onClick={()=>setShowMenu(false)}>All doctor</NavLink> */}
          <NavLink className='px-4 py-2 rounded inline-block' onClick={logout}>Logout</NavLink>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
