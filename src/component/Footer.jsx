import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-link'>
      <ul className="navbar-nav column gap-3 ">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Services">Sevices</Link>
        </li>
        <li className="nav-item">
          <Link to="/PortFolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/Testimonials">Testimonials</Link>
        </li>
        </ul>
      </div>
            {/* <div className="icons">
      <a href="">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div> */}
      <div className="container">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
