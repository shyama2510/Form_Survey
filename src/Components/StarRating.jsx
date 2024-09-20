

import React from "react";
import './StarRating.css';

const StarRating = ({ maxRating, currentRating, onRatingChange }) => {

  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= currentRating ? "star filled" : "star"}
          onClick={() => onRatingChange(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;

