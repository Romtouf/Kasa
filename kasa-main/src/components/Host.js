import React from "react";

const Host = (props) => {
  return (
    <div className="host">
      <p className="host__name">{props.name}</p>
      <img className="host__image" src={props.picture} alt="Avatar" />
    </div>
  );
};

export default Host;
