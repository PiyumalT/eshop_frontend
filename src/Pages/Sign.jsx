import React from 'react'
import './CSS/Sign.css'

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign-container">
        <h1>Sign up</h1>
        <div className="sign-fields">
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
        </div>
        <div className="sign-agreement">
          <input type="checkbox"/>
          <p>I agree to the terms and conditions</p>
        </div>
        <button className='sign-btn'>Sign up</button>
        <p className='signup-text'>Already have an account? login <a href='/login'>Here</a></p>
      </div>
    </div>
  )
}

export default Sign