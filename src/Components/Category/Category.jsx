import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'

const Category = () => {
  const renderCards = category.map(card=>{
    return(
        // card
        <div className='flex-1 basis-[300px]' key={card.id}>
            {/* card image */}
            <div className='w-full min-h-[30vh] relative -mb-10'>
                <img src={card.image}className='absolute bottom-0' ></img>
            </div>
            {/* card content */}
            <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                <Button content="See all"/>
            </div>
        </div>
    )
  })

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
           <Heading highlight="Shop" heading="Category"/>

           {/* Category Cards */}
           <div className='flex flex-wrap gap-10 md:mt-15'>
              {renderCards} 
           </div>
        </div>
    </section>
  )
}

export default Category


// for creating cards: with the help of Array of object
const category= [
    {
      id: 1,
      title: 'Fruits & Veggies',
      description: 'Fresh, Organic produce sourced daily from local farms.Explore a wide range of seasonal fruits and crisp vegetables.',
      image: FruitsCat
    },
    {
      id: 2,
      title: 'Dairy & Eggs',
      description: 'Wholesomw dairy products and free-range eggs.',
      image: DairyCat
    },
    {
      id: 3,
      title: 'Meat & SeaFood',
      description: 'High-quality, responsibly sourced meat and seafood.choose from fresh cuts, marinated options and more.',
      image: SeaFoodCat
    }
]
