import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay_left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className='main-product-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay_right">
            <h1>{product.name}</h1>
            {/* For ratings */}
            {/* <div className="productdisplay-right-star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>  
                <p> (150)</p> 
            </div> */}
            <div className="productdisplay-right-prices">
                <div className="old-price">
                    <p>{product.old_price} $</p>

                </div>
                <div className="new-price">
                    <p>{product.new_price} $</p>
                </div>
            </div>
            <div className="productdisplay-right-description">
                <p>{product.description}</p>
            </div>
            <div className="productdisplay-right-quantity">
                <p>Quantity</p>
                <input type="number" min='1' max='10' placeholder='1'/>
            </div>
            <div className="productdisplay-right-btns">
                <button className='add-to-cart' onClick={()=>{addToCart(product.id)}}>Add to cart</button>
                <button className='buy-now'>Buy now</button>
            </div>


        </div>
    </div>
  )
}

export default ProductDisplay
