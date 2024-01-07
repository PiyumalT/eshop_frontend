import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import axios from 'axios';
import { useEffect } from 'react';


export const Navbar = () => {
  const [showLinks, setShowLinks] = useState("null")
  const {cartQuantity} = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  // const [cartQuantity, setCartQuantity] = useState(0);

  //get cart quantity from api
  // useEffect(() => {
  //   const fetchCartQuantity = async () => {
  //     try {
  //       //set auth token in header
  //       const token = localStorage.getItem('token');
  //       if (token) {
  //           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //       } else {
  //           axios.defaults.headers.common['Authorization'] = null;
  //       }
  //       const response = await axios.get('/cart/count'); // Replace with your actual API endpoint
  //       setCartQuantity(response.data.count); // Assuming the API response structure has a 'products' property
  //   } catch (error) {
  //       console.error('Error fetching cart data:', error);
  //     }
  //   };

  //   fetchCartQuantity();
  // }
  // , []);

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <h2>E-Shop</h2>
        </Link>
      </div>
      <ul className='navbar__links'>
        <li onClick={()=>{setShowLinks("category1")}}><Link to='/'>category 1</Link>{showLinks==="category1"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category2")}}><Link to='/category/test1'>category 2</Link>{showLinks==="category2"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category3")}}><Link to='/category/test 2'>category 3</Link>{showLinks==="category3"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category4")}}><Link to='/category/test 4'>category 4</Link>{showLinks==="category4"?<hr/>:<></>}</li>
      </ul>
      <div className='navbar__search'>
        <input type='text' placeholder='Search' onChange={e=>{setSearchTerm(e.target.value)}}/>
        <button onClick={()=>{setShowLinks("null")}}>
        {searchTerm.trim() === '' ? (
          <FontAwesomeIcon icon={faSearch} />
        ) : (
          <Link to={`/search/${searchTerm}`}>
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        )}
        </button>
      </div>
      <div className='navbar__cart'>
        <Link to='/cart' onClick={()=>{setShowLinks("null")}}>
          <img src={cart_icon} alt='cart' />
          <div className='navbar_cart_count'>
            {cartQuantity}
          </div>
        </Link>
      </div>
      <div className='navbar__user'>
        <Link to='/sign' onClick={()=>{setShowLinks("null")}}>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>
      </div>
      

      
    </div>
  )
}

export default Navbar