import React from 'react'

const Product = (props) => {
    
const {title, price, city} = props

  return (
    <div className="bg-green-700 text-center h-20 m-auto mt-3">

        <h1 className='bg-blue-500'>Model: {title}</h1>
        <h1>Price: {price}</h1>

        <h1>City: {city}</h1>
    </div>
  )
}
export default Product;