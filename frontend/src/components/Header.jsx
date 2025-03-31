import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gray-100 rounded-b-lg px-6 md:px-10 lg:px-20'>
        {/* -----------left side-------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
         <p className='text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appointment <br />
         With Trusted Doctors</p>   
         <div className='flex flex-col md:flex-row items-center gap-3 text-gray-700 text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointment hassle-free.</p>
         </div>
         <a className='flex items-center gap-3 bg-gray-text-gray-700 px-8 py-3 bg-[#007E85] rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
         </a>
        </div>
        {/* -----------right side-------- */}
        <div className='md:w-1/2 relative'>
            <img className='w-96 md:absolute bottom-7  h-auto rounded-lg' style={{backgroundImage: "url('/Vector.png')"}} src={assets.header2} alt="" />
        </div>
    </div>
  )
}

export default Header
