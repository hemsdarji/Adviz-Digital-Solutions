import React from "react";
import "./Testimonials.css";
import ReviewCard from "../ReviewCard/ReviewCard";


const Testimonials = () => {
  return (
    <section className=" services-section">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading ">Customer Review</h2>
        <hr className="w-25 mx-auto " />
        <h5>
          "Engaging with this social media marketing agency has been a
          game-changer for my business. Their strategic prowess and creative
          brilliance have elevated our online presence, resulting in increased
          brand visibility and customer engagement. Their team's dedication is
          truly commendable; they consistently deliver captivating content and
          data-driven strategies that have translated into measurable results.
          From in-depth analytics to innovative campaign ideas, they've
          demonstrated expertise at every step. Collaborating with them has not
          only expanded our digital reach but also deepened customer
          relationships. I highly recommend this agency to anyone seeking to
          thrive in the competitive digital landscape."
        </h5>
      </div>
      <div className="img-div">
        <img src="./img/social-bg.png" alt="social-bg" />
      </div>
      <div>
        <ReviewCard />
      </div>

      {/* <div className="container mt-10">
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
      </div> */}
    </section>
  );
};

export default Testimonials;
