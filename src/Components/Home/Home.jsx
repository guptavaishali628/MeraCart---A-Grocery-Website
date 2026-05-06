import React from 'react'

// import Navbar component here so we dont have to inport it on the app.jsx file
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
      <Process/>
    </div>
  )
}

export default Home
