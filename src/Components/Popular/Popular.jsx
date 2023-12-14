import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className="popular">
        <h2>Popular Products</h2>
        <hr/>
        <div className="popular_items">
        {data_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
