import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ aboutTitle, aboutContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse">
      <div className="collapse_block">
        <h3 className="collapse_title">{aboutTitle}</h3>
        <img
          onClick={handleToggle}
          className={isOpen ? "arrow arrow_down" : "arrow arrow_up"}
          src={arrowUp}
          alt="Flèches pour lire le contenu"
        />
      </div>
      <div className={isOpen ? "collapse_text" : "collapse_hidden"}>
        {Array.isArray(aboutContent)
          ? aboutContent.map((index, text) => {
              return <span key={index}>{text}</span>;
            })
          : aboutContent}
      </div>

      {/* <p
        id="collapseTextDesign"
        className={isOpen ? "collapseText" : "collapseHidden"}
      >
        {aboutContent}
      </p> */}
    </div>
  );
};

export default Collapse;
