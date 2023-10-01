import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__block">
        <h3 className="collapse__block__title">{title}</h3>
        <img
          onClick={handleToggle}
          className={isOpen ? "arrow arrow__down" : "arrow arrow__up"}
          src={arrowUp}
          alt="Flèches pour lire le contenu"
        />
      </div>
      <div className={isOpen ? "collapse__text" : "collapse__hidden"}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Collapse;
