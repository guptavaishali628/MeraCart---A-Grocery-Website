import React from 'react'

//here we will pass prop to inherit proper so we can change the content
const Button = (props) => {
  return (
    <div>
      <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 text-white rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 cursor-pointer transition-all duration-300'>
        {props.content}  {/*access here */}
      </button>
    </div>
  )
}

export default Button
