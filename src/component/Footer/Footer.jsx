import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className='col-md-4'>
            <h2 className="mb-4">ADVIZ</h2>
            <h4 className="opacity-50">Digital Marketing Agency</h4>
          </div>
          <div className='col-md-4'>
            <h3 className="mb-4">Address</h3>
            <p className="opacity-50">Santiniketan<br />Dhanera, Banaskantha<br />Pincode: 385310</p>
          </div>
          <div className='col-md-4'>
            <h3 className="mb-4">Contact</h3>
            <h5 className="opacity-50">+91 7698542923</h5>
            <h5 className="opacity-50">hemsdarji8160304190@gmail.com</h5>
          </div>
        </div>
        <div className='col-12 copy-right'>
          <p className="opacity-70">&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
