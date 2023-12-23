import React, { createContext, useState } from 'react'
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart ={};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        let tempCart = {...cartItem};
        tempCart[itemId] = tempCart[itemId] + 1;
        setCartItem(tempCart);
    };

    const removeFromCart = (itemId) =>{
        let tempCart = {...cartItem};
        tempCart[itemId] = tempCart[itemId] - 1;
        setCartItem(tempCart);
    }
    const contextValue = {all_products,cartItem, addToCart , removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 
