import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-all-link-container">
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Products</a></li>
        </ul>
        <div className="footer-logo">
          <img src={footer_logo} alt="logo" />
          <p>Eshop</p>
        </div>
        <div className="footer-icon-container">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <div className="footer-privacy-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Return Policy</a>
        </div>
      </div>
      <div className="footer-credits-container">
        <div className="footer-credits">
          <hr />
          <p>© 2021 Eshop. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer