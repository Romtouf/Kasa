import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Carrousel = ({ pictures, title }) => {
  let [index, setIndex] = useState(0);

  const handleClickRight = () => {
    setIndex((image) => (image === pictures.length - 1 ? 0 : image + 1));
  };
  const handleClickLeft = () => {
    setIndex((image) => (image === 0 ? pictures.length - 1 : image - 1));
  };
  const counter = () => {
    const currentCounter = index + 1;
    const lengthCounter = pictures.length;
    return `${currentCounter}/${lengthCounter}`;
  };

  const arrowDisplay = pictures.length > 1;

  return (
    <div className="carrousel">
      {arrowDisplay && (
        <img
          src={arrowLeft}
          className="arrow-left"
          onClick={handleClickLeft}
          alt={title}
        />
      )}
      <img src={pictures[index]} alt={`${title}`} />
      {arrowDisplay && (
        <img
          src={arrowRight}
          className="arrow-right"
          onClick={handleClickRight}
          alt={title}
        />
      )}
      {arrowDisplay && <div className="counter">{counter()}</div>}
    </div>
  );
};

export default Carrousel;
