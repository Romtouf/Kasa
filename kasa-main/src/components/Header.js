import React from "react";
import logo from "../assets/logo-Kasa.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        {" "}
        <div className="imageNavigation">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="linksNavigation">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
