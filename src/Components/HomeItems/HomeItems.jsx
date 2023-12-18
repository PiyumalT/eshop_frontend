import React from 'react'
import './HomeItems.css'
import data_products from '../Assets/data'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

export const HomeItems = () => {
  return (
    <div>
      <div className="popular">
        <h2>Popular Products</h2>
        <hr/>
        <div className="popular_items">
        {data_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price}/>
            })}
        </div>
      </div>
      <div className="NewArrival">
        <h2>New Arrivals</h2>
        <hr/>
        <div className="NewArrival_items">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default HomeItems
