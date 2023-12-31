import React from "react";
import logo from "../assets/logo-Kasa.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__image">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="header__links">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            À propos
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
