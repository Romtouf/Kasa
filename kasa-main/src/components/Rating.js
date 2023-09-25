import React from "react";

const Rating = ({ stars }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((star, index) =>
        star <= stars ? (
          <i className="fa-solid fa-star red-star" key={index}></i>
        ) : (
          <i className="fa-solid fa-star grey-star" key={index}></i>
        )
      )}
    </div>
  );
};

export default Rating;
