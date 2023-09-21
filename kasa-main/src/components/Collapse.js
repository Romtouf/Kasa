import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapseBlock"></div>
      <h3 className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        {title}
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
        {content}
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
