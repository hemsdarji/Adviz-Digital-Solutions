import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { serviceCards, ServiceCard } from "../../ServiceCard";
import Team from "../../pages/Team/Team";
import ShapeDivider from "../../pages/ShapeDivider";

const imgArr = [
  "./img/re1.jpg",
  "/img/re2.jpg",
  "/img/re3.jpg",
  "/img/re4.jpg",
  "/img/re1.png",
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left-div col-md-12 col-lg-6">
              <h1>Welcome to Adviz Social Media Marketing Agency</h1>
              <p>
                Your Success, Our Expertise <br />
                "Fueling your social success! 🚀 Unleash the power of strategic
                content, engagement wizardry, and trend mastery. Let's skyrocket
                your brand together! 🌟 #AdvizSocial"
              </p>
              <Link to="/Contact" className="btn btn-secondary ">
                Contact Us
              </Link>
            </div>
            <div className="right-div col-md-12 col-lg-6">
              <div className="image-container" style={{ maxWidth: "100%" }}>
                <img
                  src="./img/digital-marketing-main.svg"
                  alt="image"
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

        <ShapeDivider />
        </div>
      </section>

      <section className=" services-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading">
            What We Will Do For <br /> Your Business
          </h2>
          <hr className="w-25 mx-auto " />
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

      <section className="carousel">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading">Visible Successes</h2>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="in-img">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {imgArr.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
      </section>

      <section>
        <Team />
      </section>
      
    </>
  );
};

export default Home;
