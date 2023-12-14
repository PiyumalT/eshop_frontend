import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
  const [showLinks, setShowLinks] = useState("category1")
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
        <h2>E-Shop</h2>
      </div>
      <ul className='navbar__links'>
        <li onClick={()=>{setShowLinks("category 1")}}>category 1{showLinks==="category 1"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category 2")}}>category 2{showLinks==="category 2"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category 3")}}>category 3{showLinks==="category 3"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category 4")}}>category 4{showLinks==="category 4"?<hr/>:<></>}</li>
      </ul>
      <div className='navbar__search'>
        <input type='text' placeholder='Search' />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='navbar__cart'>
        <img src={cart_icon} alt='cart' />
        <div className='navbar_cart_count'>
          0
        </div>
      </div>
      <div className='navbar__user'>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      

      
    </div>
  )
}

export default Navbar