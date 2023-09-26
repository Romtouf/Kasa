import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import Slide from "../data/annonces.json";

const Carrousel = () => {
  const [counter, setCounter] = useState(1);
  const [index, setIndex] = useState(1);
  const length = Slide.length;
  const newIndex = index - 1;
  const handleClickRight = () => {
    setCounter(counter === length - 1 ? 0 : counter + 1);
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleClickLeft = () => {
    setCounter(counter === 0 ? length - 1 : counter - 1);
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  return (
    <>
      <div className="carrousel">
        <div className="carrousel__arrows">
          <img
            src={arrowLeft}
            alt="Défiler vers la gauche"
            onClick={handleClickLeft}
            className="arrow-left"
          />
          <img
            src={arrowRight}
            alt="Défiler vers la droite"
            onClick={handleClickRight}
            className="arrow-right"
          />
        </div>

        <span className="counter">
          {counter}/{length}
        </span>
      </div>
      {Slide.map((pictures, index) => (
        <div key={index}>
          <img src={pictures} alt={"image" + { index }} />
        </div>
      ))}
    </>
  );
};
export default Carrousel;
