import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="imageFooter">
          <img src={logoFooter} alt="Logo"></img>
        </div>
        <div className="sentenceFooter">
          <span>© 2020 Kasa. All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
