import React from "react";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="infos">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;
