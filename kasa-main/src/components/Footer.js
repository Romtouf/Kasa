import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__image">
          <img src={logoFooter} alt="Logo"></img>
        </div>
        <div className="footer__text">
          <span>
            © 2020 Kasa. All <br className="br-none" />
            rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
