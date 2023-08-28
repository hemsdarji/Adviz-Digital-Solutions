import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">ADVIZ</a>
      <ul className="navbar-nav column gap-3 ">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/">about Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Sevices</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
</nav>
  );
};

export default Navbar;

