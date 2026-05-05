import React from 'react'

// import Navbar component here so we dont have to inport it on the app.jsx file
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
    </div>
  )
}

export default Home
