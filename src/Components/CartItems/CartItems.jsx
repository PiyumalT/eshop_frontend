import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CartItems.css';
import { Link } from 'react-router-dom';

export const CartItems = () => {
  const [cartData, setCartData] = useState([]);
  const [Subtotal, setSubtotal] = useState(0);

  if (!localStorage.getItem('token')) {
    window.location.href = '/sign';
  }

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        setSubtotal(0);
        //set auth token in header
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
        }
        const response = await axios.get('/cart'); // Replace with your actual API endpoint
        setCartData(response.data); // Assuming the API response structure has a 'products' property

        //calculate 
        let total = 0;
        response.data.map((item) => {
            total += item.product_id.price * item.quantity;
        })
        setSubtotal(total);

        
    } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

    const removeCartItem = (id) => {
        //set headers with token stored in local storage
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //send request to backend to add to cart (post : /cart)
        axios.delete(`/cart/${id}`)
        .then((res) => {
            window.location.reload();
        })

    

    }

  //add state variable to store total cart amount

  return (
    <div className="cartitems">
      <div className="cartitems-fomat-main">
        <h3>Product</h3>
        <h3>Title</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3>Remove</h3>
      </div>
      <hr />
      {cartData.map((cartItem) => {
        if (cartItem.quantity > 0) {
          return (
            <div className="cartitems-fomat cartitems-fomat-main" key={cartItem._id}>
                <div className="cartitems-fomat-img">
                <Link to = {`/product/${cartItem.product_id._id}`}>
                    <img src={cartItem.product_id.image} alt="" />
                </Link>
                </div>
                <div className="cartitems-fomat-title">
                    <Link to = {`/product/${cartItem.product_id._id}`}>
                        <p>{cartItem.product_id.name}</p>
                    </Link>
                </div>
                <div className="cartitems-fomat-price">
                    <p>{cartItem.product_id.price} $</p>
                </div>
              <div className="cartitems-fomat-quantity">
                {/* Assuming there is an 'addToCart' and 'removeFromCart' function */}
                <button >+</button>
                <input type="text" value={cartItem.quantity} disabled  min={0} max={cartItem.product_id.countInStock}/>
                <button >-</button>
              </div>
              <div className="cartitems-fomat-total">
                <p>{cartItem.product_id.price * cartItem.quantity} $</p>
              </div>
              <div className="cartitems-fomat-remove">
              <button onClick={() => removeCartItem(cartItem._id)}>Remove</button>
              </div>
            </div>
          );
          

        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              {/* Assuming there is a 'getTotalCartAmount' function */}
              <p>${Subtotal}</p>
            </div>
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              {/* Assuming there is a 'getTotalCartAmount' function */}
              <h3>${Subtotal}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>Have a promocode?</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='Enter your code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};
