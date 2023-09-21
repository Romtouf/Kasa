import React from "react";
import Banner from "../components/Banner";
import about from "../data/about.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <>
      <Banner />
      <div className="about">
        {about.map((id, title, content) => (
          <div className="aboutCollapse" key={id}>
            <Collapse title={title} content={content} />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
