import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import pc_img from './/PC.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_left">
            <h3>Dreams Come True</h3>
            <h2>Exprlore Unique Items </h2>
            <h2>Just for you</h2>
            <Link to='/'>
                <button className='shop_now_btn' onClick={window.scrollTo(1000,1000)}>Shop Now -&gt;</button>
            </Link>
        </div>
        <div className="hero_right">
            <img src={pc_img} alt="hero" />
        </div>



    </div>
  )
}

export default Hero
