import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ aboutTitle, aboutContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapseBlock">
        <h3 className="collapseTitle">{aboutTitle}</h3>
        <img
          onClick={() => setIsOpen(!isOpen)}
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
