import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useParams();


  useEffect(() => {
    const fetchsearchResults = async () => {
      setSearchResults([]);
      try {
        const response = await axios.get(`products/search/${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    fetchsearchResults();
  }, [searchTerm]);

  return (
    <div className="shop-catgory">
      {searchResults.length === 0 ?(
        <h2>No results found for : {searchTerm}</h2>
      ):(
        <><h2>Results for : {searchTerm}</h2><div className="shop-catgory-indexSort">
            <p>
              <span>Showing {searchResults.length}</span> out of {searchResults.length} products
            </p>
            <div className="shopcategory-sort">
              {/* sort by: dropdown */}
            </div>
          </div><div className="shop-category-products">
              {searchResults.map((item, i) => (
                <Item key={i} id={item._id} name={item.name} image={item.image} price={item.price} />
              ))}
            </div></>
      )}
      
      {/* add explore more button later */}
      <RelatedProducts/>
    </div>
  );
};

export default SearchResults;
