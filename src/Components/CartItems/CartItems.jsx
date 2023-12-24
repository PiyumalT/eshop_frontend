import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
    const {all_products,cartItem, addToCart , removeFromCart,getTotalCartAmount} = useContext(ShopContext);
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
            <hr/>
            {all_products.map((product)=>{
                if(cartItem[product.id] > 0){
                    return(
                        <div className="cartitems-fomat cartitems-fomat-main">
                            <div className="cartitems-fomat-img">
                                <img src={product.image} alt=""/>
                            </div>
                            <div className="cartitems-fomat-title">
                                <p>{product.name}</p>
                            </div>
                            <div className="cartitems-fomat-price">
                                <p>{product.new_price} $</p>
                            </div>
                            <div className="cartitems-fomat-quantity">
                                <button onClick={()=>{addToCart(product.id)}}>+</button>
                                <input type="text" value={cartItem[product.id]} disabled/>
                                <button onClick={()=>{removeFromCart(product.id)}}>-</button>
                            </div>
                            <div className="cartitems-fomat-total">
                                <p>{product.new_price * cartItem[product.id]} $</p>
                            </div>
                            <div className="cartitems-fomat-remove">
                                <button onClick={()=>{removeFromCart(product.id)}}>Remove</button>
                            </div>
                        </div>
                    )
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Have a promocode?</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Enter your code'/>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
