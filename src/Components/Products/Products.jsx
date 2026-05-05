import React, { useState } from 'react'
import Heading from '../Heading/Heading'
//importing productlist
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Products = () => {
  // for tabs we create array[define all categories here]:
  const categories =['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
  // for active tab:
  const[activeTab, setActiveTab] = useState('All');
  //for filtering:
  let filteredItems = activeTab == 'All' ? ProductList : ProductList.filter(item=>item.category === activeTab);
  // mapping on product list:(we only have to show two rows with 8 product so we use slice(0,8) and remaining we show by clicking on see all product)
  // we will now mapping on the filteredItems instead of ProductList
  const renderCards = filteredItems.slice(0,8).map(product=>{
    return(
        <Cards key={product.id} 
        image={product.image}
        name={product.name}
        price={product.price}/>
    )
  })
  
  return (
     <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading="Products"/>

            {/* Tabs : execute map() on array categories*/}
            <div className='flex gap-3 justify-center mt-10'>
                {categories.map(category=>{
                    return(
                        <button className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white': 'bg-zinc-100'}`} key={category} onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })}
            </div>

            {/* Product Listing */}
            <div className='grid grid-cols-4 gap-9 mt-20'>
                {renderCards}
            </div>

            <div className='mt-15 mx-auto w-fit'>
                <Button content="View All"/>
            </div>

        </div>
     </section>
  )
}

export default Products 

