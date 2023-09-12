import React from "react";
import "./ReviewCard.css";
import { reviews } from "../../Data";

const ReviewCard = () => {

  return (
    <div className="row card-main">
      {reviews.map((review, index) => (
        <div className="col-sm-6 mb-3 mb-sm-0" key={index}>
          <div className="card">
            <div className="card-body-left">
              <img src={review.imgSrc} alt="" />
            </div>
            <div className="card-body-right">
              <h4 className="card-title">{review.title}</h4>
              <h6>{review.designer}</h6>
              <p className="card-text">{review.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
