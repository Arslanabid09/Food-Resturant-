import React from 'react'
import Logo from '../assets/Food_Assets/assets/logo/logo.png';
import { useState } from 'react';
import { FaBars,FaTimes,FaShoppingBag } from 'react-icons/fa';
import {Button} from '../Components'
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className='relative p-8 flex justify-between items-center z-50'>
    {/* Logo */}
    <img className='w-32 object-contain curs' src={Logo} alt='Logo Img Not Found' />

    {/* Hamburger Icon for Mobile */}
    <span
      className='md:hidden absolute right-2 bg-red-800 text-white px-3 py-3 cursor-pointer'
      onClick={toggleSidebar}
    >
      <FaBars />
    </span>
    https://food-resturant-omega.vercel.app/
    {/* Navbar for Large Screens */}
    <nav className='hidden md:flex flex-col items-center'>
      <ul className='flex gap-16 items-center'>
        <li className='font-semibold text-lg hover:tracking-widest duration-500 cursor-pointer'>Home</li>
        <li className='font-semibold text-lg hover:tracking-widest duration-500 cursor-pointer'>About</li>
        <li className='font-semibold text-lg hover:tracking-widest duration-500 cursor-pointer'>Menu</li>
        <li className='font-semibold text-lg hover:tracking-widest duration-500 cursor-pointer'><Button label={'Download App'} className={'py-2 px-5 hover:px-8 duration-500 hover:shadow-2xl hover:shadow-red-800/25'} /></li>
      </ul>
     
    </nav>

    {/* Sidebar for Mobile Screens */}
    <div
      className={`fixed top-0 right-0   h-full bg-red-800 text-white p-10 transform ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 md:hidden`}
    >
      <span className='absolute right-2 bg-white text-red-800 px-3 py-3 cursor-pointer' onClick={toggleSidebar}>
        <FaTimes />
      </span>
      <ul className='flex flex-col gap-y-16 items-center mt-16'>
        <li className='font-semibold text-xl hover:tracking-widest duration-500 cursor-pointer'>Home</li>
        <li className='font-semibold text-xl hover:tracking-widest duration-500 cursor-pointer'>About</li>
        <li className='font-semibold text-xl hover:tracking-widest duration-500 cursor-pointer'>Menu</li>
        <li className='font-semibold text-base  cursor-pointer'><Button label={'Download App'} className={'py-2 px-5 hover:px-8 duration-500 hover:shadow-2xl  hover:shadow-red-800/25'} /></li>
        
      </ul>
    </div>
  </header>
  )
}

export default Navbar