import React from 'react'
import Heading from '../Heading/Heading'
// react icons :
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

//image:
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
  // for left values(we just wanted only two values to render in left side so we use "slice(0,2)" method "):
  const leftValues = value.slice(0,2).map(item=>{
    return(
        <div key={item.id} className='flex items-center  md:flex-row-reverse items-center gap-7'>
            <div className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 p-4 rounded-full'>
                <span>{item.icon}</span>
            </div>
            <div className='md:text-right'>
                <h3 className='text-zinc-800 text-2xl font-semibold'>{item.title}</h3>
                <p className='text-zinc-600'>{item.para}</p>
            </div>
        </div>
    )
  })

  // for right values(we just wanted only two values to render in left side so we use "slice(0,2)" method "):
   const rightValues = value.slice(2).map(item=>{
    return(
        <div key={item.id} className='flex items-center gap-7'>
            <div className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 p-4 rounded-full'>
                <span>{item.icon}</span>
            </div>
            <div>
                <h3 className='text-zinc-800 text-2xl font-semibold'>{item.title}</h3>
                <p className='text-zinc-600'>{item.para}</p>
            </div>
        </div>
    )
  })

  
    
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading="Value"/>

            <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>

                {/* left values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                   {leftValues}
                </div>

                {/* image */}
                <div className='md:flex w-1/2 hidden'>
                    <img src={Basket}></img>
                </div>

                {/* Right values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                  {rightValues}
                </div>
                
            </div>
        
        </div>
    </section>
  )
}

export default Values

//Array of object:

const value = [{
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon:  <FaHeart/>
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'We source our produce daily from local farms to ensure you get the highest quality and nutritional value.',
        icon: <FaLeaf/>
    },
    {
        id: 3,
        title: 'Food Safety',
        para: '100% certified organic products handled with strict hygiene protocols from the farm to your kitchen.',
        icon: <FaShieldAlt/>
    },
    {
        id: 4,
        title: '100% organic',
        para: 'Experience the true taste of nature with products grown without harmful chemicals and synthetic pesticides.',
        icon: <FaSeedling/>
    }
]


