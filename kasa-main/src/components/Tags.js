import React from "react";

const Tags = (props) => {
  return (
    <div className="tag">
      {props.tags.map((tag, index) => {
        return (
          <span className="tag_value" key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
