import React from "react";
import "./Testimonials.css";
import ReviewCard from "../ReviewCard/ReviewCard";


const Testimonials = () => {
  return (
    <section className=" services-section">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading ">Customer Review</h2>
        <hr className="w-25 mx-auto " />
      </div>
      <div>
        <ReviewCard />
      </div>
    </section>
  );
};

export default Testimonials;
