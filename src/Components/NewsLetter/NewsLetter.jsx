import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Offers as Email</h1>
        <p>Subcribe to Newsletter and stay Updated</p>
        <div className="input">
            <input type="text" placeholder="Enter your Email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter