import React from 'react'
import logo from '../Assets/infispec-logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaPerson } from 'react-icons/fa6';
import { TiThMenu } from "react-icons/ti";
import { BiSolidUser } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white 
    duration-200 relative z-40'>
      {/*upper Navbar */}
      <div className='bg-primary/30 py-1'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt="" className='w-40 py-0 '   />
                </a>
            </div>
            {/* search bar */}
            <div className='flex justify-between items-center gap-4 '>
                  <div className=' relative group hidden sm:block '>
                    <input 
                    type="text" 
                    placeholder='search' 
                    className='w-[200px] sm:w-[200px]
                    group-hover:w-[400px] transition-all
                    duration-300 rounded-full border
                    border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' 
                    />
                    <IoMdSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 
                    -translate-y-1/2 right-3'/>
                  </div>
                     
                </div >{/* order button */}
                <div className='flex justify-between items-center gap-4 '>
                <button
                      onClick={()=> alert("This feature is currently not available Yet")}
                      className='bg-gradient-to-r from-primary to-secondary transition-all duraton-200
                      text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <TiThMenu className=' text-xl text-white drop-shadow-sm 
                        cursor-pointer'/>
                   </button>
                   <button
                        onClick={()=> alert("This feature is currently not available Yet")}
                        className='bg-gradient-to-r from-primary to-secondary transition-all duraton-200
                        text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                          <span className='group-hover:block hidden transition-all duration-200'>Cart</span>
                          <FaCartShopping className=' text-xl text-white drop-shadow-sm 
                          cursor-pointer'/>
                    </button>
                    <button
                        onClick={()=> alert("This feature is currently not available Yet")}
                        className='bg-gradient-to-r from-primary to-secondary transition-all duraton-200
                        text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                          <span className='group-hover:block hidden transition-all duration-200'>Profile</span>
                          <BiSolidUser className=' text-xl text-white drop-shadow-sm 
                          cursor-pointer'/>
                    </button>
                </div>
                    
          
        </div>
      </div>
        {/*lower navbar */}
      <div></div>
    </div>
  )
}

export default Navbar
