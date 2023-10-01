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
      <img
        className="carrousel__image"
        src={pictures[index]}
        alt={`${title}`}
      />

      <div className="carrousel__wrap">
        {arrowDisplay && (
          <img
            src={arrowLeft}
            className="arrow-left"
            onClick={handleClickLeft}
            alt={title}
          />
        )}

        {arrowDisplay && (
          <img
            src={arrowRight}
            className="arrow-right"
            onClick={handleClickRight}
            alt={title}
          />
        )}
      </div>
      <div className="carrousel__counter">
        {arrowDisplay && (
          <div className="carrousel__counter__active carrousel__counter__inactive">
            {counter()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
