import React from "react";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

const Rating = ({ stars }) => {
  const arrayStars = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {arrayStars.map((star, index) =>
        stars >= star ? (
          <img className="stars__red" src={starActive} alt="" key={index} />
        ) : (
          <img className="stars__grey" src={starInactive} alt="" key={index} />
        )
      )}
    </div>
  );
};

export default Rating;
