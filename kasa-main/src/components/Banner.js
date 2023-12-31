import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import imageHome from "../assets/image-source-1.svg";
import imageAbout from "../assets/image-source-2.svg";

const Banner = () => {
  const [isAbout, setIsAbout] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setIsAbout(true);
    }
  }, []);
  return (
    <>
      <div className="image__home">
        {isAbout ? (
          <img src={imageAbout} alt="Vue sur une chaîne montagneuse"></img>
        ) : (
          <>
            <img src={imageHome} alt="Bord de mer"></img>
            <span>
              Chez vous, <br className="br-none" />
              partout et ailleurs
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Banner;
