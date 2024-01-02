import React, { useState , useEffect} from 'react';
import './CSS/Sign.css';
import axios from 'axios';




const Sign = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [resMsg, setResMsg] = useState('');

  useEffect(() => {
    // Check if token exists in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Redirect to /account if a token is found
      window.location.href = '/account';
    }
  }, []); // Empty dependency array ensures the effect runs once on mount

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSignup = () => {
    if (password === confirmPass) {
      const passwordHash = password;
      axios
        .post('users/register', {
          name,
          email,
          passwordHash,
        })
        .then((response) => {
          if (response){
            setResMsg('');
            alert('Account created successfully! Please login to continue');
            toggleTab('login')
          }
        })
        .catch((error) => {
          setResMsg(error.response.data.message);
        });
    } else {
      alert('Passwords do not match');
    }
  }

  const handleLogin = () => {
    axios
      .post('users/login', {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        // Store the token in localStorage
        localStorage.setItem('token', token);

        // Redirect to home page
        window.location.href = '/';
      })
      .catch((error) => {
        setResMsg(error.response.data.message);
      });
  }

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
        <div className="res-msg">{resMsg}</div>
        {activeTab === 'signup' && (
          <div className="sign-up-form">
            <h1>Sign up</h1>
            <div className="sign-fields">
              <input type="text" placeholder="Name" onChange={ev=>setName(ev.target.value)} value={name}/>
              <input type="email" placeholder="Email" onChange={ev=>setEmail(ev.target.value)} value={email}/>
              <input type="password" placeholder="Password" onChange={ev=>setPassword(ev.target.value)}/>
              <input type="password" placeholder="Confirm Password" onChange={ev=>setConfirmPass(ev.target.value)}/>
            </div>
            <div className="sign-agreement">
              <input type="checkbox" />
              <p>I agree to the terms and conditions</p>
            </div>
            <button className="sign-btn" onClick={handleSignup}>Sign up</button>
            <p className="signup-text" onClick={() => toggleTab('login')}>
                Already have an account? Login
            </p>
          </div>
        )}
        {activeTab === 'login' && (
          <div className="login-form">
            <h1>Login</h1>
            <div className="sign-fields">
              <input type="email" placeholder="Email" onChange={ev=>setEmail(ev.target.value)} value={email}/>
              <input type="password" placeholder="Password" onChange={ev=>setPassword(ev.target.value)}/>
            </div>
            <button className="sign-btn" onClick={handleLogin}>Login</button>
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
