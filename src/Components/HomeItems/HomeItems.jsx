import React, { useState, useEffect } from 'react';
import './HomeItems.css';
import Item from '../Item/Item';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const HomeItems = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [newArrivalsCount, setNewArrivalsCount] = useState(4);


  useEffect(() => {
    // Fetch popular products
    axios.get('products/get/featured/4')
      .then(response => {
        setPopularProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching popular products:', error);
      });

    // Fetch new arrivals
    axios.get(`products/get/latest/${newArrivalsCount}`)
      .then(response => {
        setNewArrivals(response.data);
      })
      .catch(error => {
        console.error('Error fetching new arrivals:', error);
      });
    
  }, [newArrivalsCount]);

  const handleLoadMore = () => {
    // Increase count by 4 when the link is clicked
    setNewArrivalsCount(prevCount => prevCount + 4);
  };
  

  return (
    <div>
      <div className="popular">
        <h2>Popular Products</h2>
        <hr/>
        <div className="popular_items">
          {popularProducts.map((item, i) => (
            <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
      <div className="NewArrival">
        <h2>New Arrivals</h2>
        <hr/>
        <div className="NewArrival_items">
          {newArrivals.map((item, i) => (
            <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
        {/* fix this link goto top bug later and enable it */}
        {/* <Link onClick={() => handleLoadMore()}>Load More</Link> */}
      </div>
    </div>
  );
};

export default HomeItems;
