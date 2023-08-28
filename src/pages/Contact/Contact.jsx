import React from 'react';
import "./Contact.css"; 

const Contact= () => {
  return (
    <section className="hero-contact">
    <form className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <input type="text" id="name" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" id="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <input type="tel" id="phone" placeholder="Phone Number" required />
      </div>
     < div className="form-group">
          <textarea id="message" placeholder="Message" rows="5" required />
        </div>
      <button type="submit">Submit</button>
    </form>

    </section>
  );
};

export default Contact;