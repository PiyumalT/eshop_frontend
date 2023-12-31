import React, { useContext ,useState , useEffect } from 'react'
import './ProductDisplay.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Get the id from the url
    const [resMsg, setResMsg] = useState('Loading...');
    const [quantity, setQuantity] = useState(1);
    const {cartQuantity, updateCartQuantity } = useContext(ShopContext);

    const addToCart = (item_id) => {
        console.log(item_id);
        //set headers with token stored in local storage
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //send request to backend to add to cart (post : /cart)
        axios.post('http://localhost:3000/api/v1/cart', {
            item_id: item_id,
            quantity: quantity
        })
        .then((res) => {
          updateCartQuantity();
        })
    }



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
            setProduct(response.data);
            setResMsg(null);
          } catch (error) {
            setProduct(null);
            setResMsg("No such product or expired link");
          }
        };
    
        fetchData();
      }, [id]); // Include id in the dependency array to re-fetch data when id changes
    
      if (!product) {
        // Loading state or handle the case where data is still being fetched
        return <p className='productNotfound'>{resMsg}</p>;
      }
    
    
    
        
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
                    <p>{product.price*1.2} $</p>

                </div>
                <div className="new-price">
                    <p>{product.price} $</p>
                </div>
            </div>
            <div className="productdisplay-right-description">
                <p>{product.description}</p>
            </div>
            <div className="productdisplay-right-quantity">
                <p>Quantity</p>
                <input type="number" min='1' value={quantity} max={product.countInStock} placeholder='1' onChange={ev=>setQuantity(ev.target.value)}/>
            </div>
            <div className="productdisplay-right-btns">
                <button className='add-to-cart' onClick={()=>{addToCart(product._id)}}>Add to cart</button>
                <button className='buy-now'>Buy now</button>
            </div>


        </div>
    </div>
  )
}

export default ProductDisplay
