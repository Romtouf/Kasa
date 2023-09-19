import React from "react";
import imageHome from "../assets/image-source-1.svg";

const Home = () => {
  return (
    <>
      <div className="imageHome">
        <img src={imageHome} alt="Bord de mer rocailleux"></img>
        <span>Chez vous, partout et ailleurs</span>
      </div>
    </>
  );
};

export default Home;
