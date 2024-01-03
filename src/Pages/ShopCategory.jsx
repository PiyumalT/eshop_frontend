import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const ShopCategory = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { category } = useParams();


  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setCategoryProducts([]);
      try {
        const response = await axios.get(`products/get/bycategory/${category}`);
        setCategoryProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="shop-catgory">
      <h2>{category}</h2>
      <div className="shop-catgory-indexSort">
        <p>
          <span>Showing {categoryProducts.length}</span> out of {categoryProducts.length} products
        </p>
        <div className="shopcategory-sort">
          {/* sort by: dropdown */}
        </div>
      </div>
      <div className="shop-category-products">
        {categoryProducts.map((item, i) => (
          <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
      {/* add explore more button later */}
      <RelatedProducts/>
    </div>
  );
};

export default ShopCategory;
