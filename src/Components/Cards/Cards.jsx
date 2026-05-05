import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
const Cards = ({image, name, price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
        {/*Card icon: heart and plus icon */}
        <div className='flex justify-between'>  
            <span className='text-3xl text-zinc-400'>
                <FaHeart/>
            </span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-3 rounded-lg'>
                <FaPlus/>
            </button>
        </div>

        {/*Card image */}
        <div className='w-full h-50'>
            <img src={image} alt='' className='w-full h-full mx-auto object-contain'></img>
        </div>

        {/* Card Content: Title, Price, Button */}
        <div className='text-center'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-xl font-bold mt-3 mb-3'>{`Rs. ${price}`}</p>
            <Button content="Shop Now"/>
        </div>

    </div>  
  )
}

export default Cards
