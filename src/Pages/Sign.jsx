import React, { useState } from 'react';
import './CSS/Sign.css';

const Sign = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sign">
      <div className="sign-container">
        <div className="tabs">
          <span
            className={activeTab === 'signup' ? 'active-tab' : ''}
            onClick={() => toggleTab('signup')}
          >
            Sign up
          </span>
          <span
            className={activeTab === 'login' ? 'active-tab' : ''}
            onClick={() => toggleTab('login')}
          >
            Login
          </span>
        </div>
        {activeTab === 'signup' && (
          <div className="sign-up-form">
            <h1>Sign up</h1>
            <div className="sign-fields">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="sign-agreement">
              <input type="checkbox" />
              <p>I agree to the terms and conditions</p>
            </div>
            <button className="sign-btn">Sign up</button>
            <p className="signup-text" onClick={() => toggleTab('login')}>
                Already have an account? Login
            </p>
          </div>
        )}
        {activeTab === 'login' && (
          <div className="login-form">
            <h1>Login</h1>
            <div className="sign-fields">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="sign-btn">Login</button>
            <p className="signup-text" onClick={() => toggleTab('signup')}>
                Don't have an account? Sign up
            </p>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Sign;
