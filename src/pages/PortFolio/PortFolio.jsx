import React from "react";
import "./PortFolio.css";

const PortFolio = () => {
  return (
    <>
      <section>
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading ">Creative Showcases</h2>
          <hr className="w-25 mx-auto " />
        </div>

        <div className="project-section">
          <h2>Project Showcases</h2>
          <div className="mb-3 main-card">
            <h3>project : 1 </h3>
            <h4>eCommerce platform</h4>
            <img
              src="./img/textilevista.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Website Name : TEXTILE-VISTA</h3>
              <p className="card-text">
                Textile Vistta:"Welcome to Textile Vistta, where we redefine
                online shopping. Our eCommerce platform, meticulously built with
                Material UI and React JS, ensures a visually engaging and
                user-friendly experience. Explore a wide range of high-quality
                textiles while navigating effortlessly. From browsing to
                checkout, our seamless design guarantees satisfaction. Join us
                at Textile Vistta and indulge in a world of premium fabrics and
                effortless shopping.
              </p>
              <p className="card-text">
                <small className="text">Last updated 2 month ago</small>
              </p>
            </div>
          </div>
          <div className="mb-3 main-card">
            <h3>project : 2 </h3>
            <h4>Facebook Advertising</h4>
            <img src="./img/fbads.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">
                Website Name : Facebook Advertising
              </h3>
              <p className="card-text">
                Unlock the power of Facebook Advertising with Mailchimp. From
                creating eye-catching ads to targeting the right audience and
                tracking performance, Mailchimp offers all-in-one solutions.
                Maximize your reach, engagement, and ROI on the world's largest
                social media platform with Mailchimp's comprehensive Facebook
                Advertising tools.
              </p>
              <p className="card-text">
                <small className="text">Last updated 1 month ago</small>
              </p>
            </div>
          </div>
          <div className="mb-3 main-card">
            <h3>project : 2 </h3>
            <h4>Social Media Platform</h4>
            <img src="./img/sournet.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Website Name : SOUR-NET</h3>
              <p className="card-text">
                Welcome to Sour-Net Webpage! This project showcases a
                Facebook-style social media webpage created using Material-UI
                and React.js. The webpage replicates the look and feel of a
                social media platform, enabling users to interact, post, and
                explore content.
              </p>
              <p className="card-text">
                <small className="text">Last updated 1 month ago</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortFolio;
