import React from 'react'

// import Navbar component here so we dont have to inport it on the app.jsx file
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  )
}

export default Home
