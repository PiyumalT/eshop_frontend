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

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let iteminfo = all_products.find((product) => product.id === parseInt(item));
                total += iteminfo.new_price * cartItem[item];
            }
        }
        return total;
    }

    const getTotalCartQuantity = () => {
        let totalItems = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems += cartItem[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_products,cartItem, addToCart , removeFromCart,getTotalCartAmount,getTotalCartQuantity};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 
