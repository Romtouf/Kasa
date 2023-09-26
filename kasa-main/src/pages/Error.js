import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <p>404</p>
      <span>
        Oup's ! La page que <br className="br-none" />
        vous demandez n'existe pas.
      </span>
      <NavLink
        to="/"
        id="link__error"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
