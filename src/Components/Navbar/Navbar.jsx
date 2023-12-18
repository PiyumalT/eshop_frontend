import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/'>
          <img src={logo} alt='logo' />
          <h2>E-Shop</h2>
        </Link>
      </div>
      <ul className='navbar__links'>
        <li onClick={()=>{setShowLinks("category1")}}><Link to='/'>category 1</Link>{showLinks==="category1"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category2")}}><Link to='/mens'>category 2</Link>{showLinks==="category2"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category3")}}><Link to='/womans'>category 3</Link>{showLinks==="category3"?<hr/>:<></>}</li>
        <li onClick={()=>{setShowLinks("category4")}}><Link to='/kids'>category 4</Link>{showLinks==="category4"?<hr/>:<></>}</li>
      </ul>
      <div className='navbar__search'>
        <input type='text' placeholder='Search' />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='navbar__cart'>
        <Link to='/cart'>
          <img src={cart_icon} alt='cart' />
          <div className='navbar_cart_count'>
            0
          </div>
        </Link>
      </div>
      <div className='navbar__user'>
        <Link to='/sign'>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>
      </div>
      

      
    </div>
  )
}

export default Navbar