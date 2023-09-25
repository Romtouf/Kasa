import React from "react";

const Host = (props) => {
  return (
    <div className="host">
      <p className="host_name">{props.name}</p>
      <img className="host_image" src={props.picture} alt="Avatar" />
    </div>
  );
};

export default Host;
