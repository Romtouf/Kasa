import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <h3 className="collapseTitle" onClick={() => setIsOpen(true)}>
        {title}

        <img
          className={isOpen ? { arrowUp } : { arrowDown }}
          src={arrowUp}
          alt="Flèches pour lire le contenu"
        />
      </h3>
      <h3 className="collapseTitle" onClick={() => setIsOpen(true)}>
        {title}

        <img
          className={isOpen ? { arrowUp } : { arrowDown }}
          src={arrowUp}
          alt="Flèches pour lire le contenu"
        />
      </h3>
    </div>
  );
};

export default Collapse;
