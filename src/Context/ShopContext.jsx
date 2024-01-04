import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  // Fetch initial cart quantity from the API
  useEffect(() => {
    const fetchCartQuantity = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/cart/count', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartQuantity(response.data.count);
      } catch (error) {
        console.error('Error fetching cart quantity:', error);
      }
    };

    fetchCartQuantity();
  }, []);

  const updateCartQuantity = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/cart/count', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      setCartQuantity(response.data.count);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const contextValue = {
    cartQuantity,
    updateCartQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
