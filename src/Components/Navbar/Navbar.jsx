import React from 'react'
//react icon :
import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='bg-white'>
      <nav className='max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center'>
        <a href='#' className='text-3xl font-bold'>
          <span className='text-green-900'>Mera</span><span className='text-orange-500 uppercase'>Cart</span>
        </a>

        {/* Desktop Menu,  for lateral spacing we use tracking-wider*/}
        <ul className='flex items-center gap-x-15'>
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
          <div className='flex p-1 border-2 border-orange-500 rounded-full' >
            <input type="text" name="text" id="text" placeholder='search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
            <button className='bg-gradient-to-b from-red-500 to-green-900 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch/></button>
          </div>

          <a href='#' className='text-zinc-800 text-2xl'>
            <FaHeart/>
          </a>
          <a href='#' className='text-zinc-800 text-2xl'>
            <RiShoppingBag4Fill />
          </a>
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar
