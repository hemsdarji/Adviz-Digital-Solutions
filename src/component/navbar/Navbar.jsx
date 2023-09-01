import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">ADVIZ</a>
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
        <li className="nav-item dropdown">
  <Link to="/" className="nav-link dropdown-toggle" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    About Us
  </Link>
  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
    <li><Link to="/Team" className="dropdown-item">Team</Link></li>
    <li><Link to="/Values" className="dropdown-item">Values</Link></li>
    <li><Link to="/BCorp " className="dropdown-item">B Corp</Link></li>
  </ul>
</li>
      </ul>
    </div>
</nav>
  );
};

export default Navbar;

