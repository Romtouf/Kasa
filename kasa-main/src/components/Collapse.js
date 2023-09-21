import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ aboutTitle, aboutContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapseBlock"></div>
      <h3 className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        {aboutTitle}
      </h3>
      <img
        className={isOpen ? "arrow arrowUp" : "arrow arrowDown"}
        src={arrowUp}
        alt="Flèches pour lire le contenu"
      />

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
