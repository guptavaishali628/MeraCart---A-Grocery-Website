import React, { useEffect, useState } from 'react'
//react icon :
import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
 // show menu state:
 const [showMenu, setShowMenu] = useState(false);
 // for shadow while scrolling:
 const [isScrolled, setIsScrolled] = useState(false);

 const toggleMenu =() =>{
     setShowMenu(!showMenu)  //is true hoga then false kra dega and agar false hoga to true:
 }

 useEffect(()=>{
  const handleScroll = () =>{
    setIsScrolled(window.scrollY > 10)
  }
  window.addEventListener('scroll', handleScroll);
  return ()=> window.removeEventListener('scroll', handleScroll)
 },[])

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.4)]' :''}`}>
      <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh]  h-[12vh] flex justify-between items-center'>
        <a href='#' className='text-3xl font-bold'>
          <span className='text-green-900'>Mera</span><span className='text-orange-500 uppercase'>Cart</span>
        </a>

        {/* Desktop Menu,  for lateral spacing we use tracking-wider*/}
        <ul className='md:flex items-center gap-x-15 hidden'>
          <li>
            <a href='#' className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
                  <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a>
          </li>
                  <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
                  <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className='item-center flex gap-x-5'>
          
          {/* Input filed */}
          <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden' >
            <input type="text" name="text" id="text" placeholder='search...' autoComplete='off' className='flex-1 h-[5vh] px-3  focus:outline-none'/>
            <button className='bg-gradient-to-b from-red-500 to-green-900 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch/></button>
          </div>

          <a href='#' className='text-zinc-800 text-2xl py-3'>
            <FaHeart/>
          </a>
          <a href='#' className='text-zinc-800 text-2xl py-3'>
            <RiShoppingBag4Fill />
          </a>

          {/* Hamburger */}
          <a href='#' className='text-zinc-800 text-3xl md:hidden py-3' onClick={toggleMenu}>
              {showMenu ? <TbMenu3/> : <TbMenu2/>} 
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-lg p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "left-1/2" : " " }`}>
          <li>
            <a href='#' className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a>
          </li>
          <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a>
          </li>
          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden' >
            <input type="text" name="text" id="text" placeholder='search...' autoComplete='off' className='flex-1 h-[5vh] px-3  focus:outline-none'/>
            <button className='bg-gradient-to-b from-red-500 to-green-900 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch/></button>
          </li>
        </ul>

      </nav>
      
    </header>
  )
}

export default Navbar
