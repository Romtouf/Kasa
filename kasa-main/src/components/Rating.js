import React from "react";

const Rating = ({ stars }) => {
  const arrayStars = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {arrayStars.map((star, index) =>
        stars >= star ? (
          <i className="fa-solid fa-star red-star" key={index}></i>
        ) : (
          <i className="fa-solid fa-star grey-star" key={index}></i>
        )
      )}
    </div>
  );
};

export default Rating;
