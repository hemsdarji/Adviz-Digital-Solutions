import React from "react";
import { ServiceCard, serviceCards } from "../../ServiceCard";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section className=" services-section">
      <div className="container text-center common-title fw-bold ">
        <h2 className="common-heading">Provided Expertise and Solutions</h2>
        <hr className="w-25 mx-auto " />

        <div className="row  main-s">
          <div className="left-s col-md-12 col-lg-6">
            <h5>
              "Our Provided Expertise and Solutions encompass a spectrum of
              tailored approaches designed to address your unique challenges.
              With a team of seasoned professionals, we deliver comprehensive
              strategies that drive success, ensuring your goals are not just
              met, but exceeded."
            </h5>

            <Link to="/Contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="right-s col-md-12 col-lg-6">
            <div className="image-container" style={{ maxWidth: "100%" }}>
              <img
                src="./img/servi.png"
                alt="image"
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="row g-5">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
