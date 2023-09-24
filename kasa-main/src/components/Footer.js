import React from "react";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_image">
          <img src={logoFooter} alt="Logo"></img>
        </div>
        <div className="footer_text">
          <span>
            © 2020 Kasa. All <br className="br_none" />
            rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
