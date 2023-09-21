import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ aboutTitle, aboutContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapseBlock">
        <h3 className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
          {aboutTitle}
        </h3>
        <img
          // Comment passer la fonction au clic + l'animation de la flèche ?
          className={isOpen ? "arrow arrowDown" : "arrow arrowUp"}
          src={arrowUp}
          alt="Flèches pour lire le contenu"
        />
      </div>
      <p
        id="collapseTextDesign"
        className={isOpen ? "collapseText" : "collapseHidden"}
      >
        {aboutContent}
      </p>
    </div>
  );
};

export default Collapse;

// {
//   /* {Array.isArray(content)
//           ? content.map((id, content) => {
//               return <span key={id}>{content}</span>;
//             })
//           : content} */
// }
