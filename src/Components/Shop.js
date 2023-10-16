import React from 'react'

const Shop = ({shop}) => {

  return (

    <div className='bg-blue-500 text-white mt-3 text-center'>
        <h1>Goods : {shop.goodsName}</h1>
        <h1>Name : {shop.name}</h1>
        <h1>ImportFrom : {shop.importFrom}</h1>
            
    </div>
  )
}
export default Shop;