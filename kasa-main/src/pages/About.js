import React from "react";
import Banner from "../components/Banner";
import about from "../data/about.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <>
      <Banner />
      <div className="about">
        {about.map((aboutId, aboutTitle, aboutContent) => (
          <div className="aboutCollapse" key={aboutId}>
            <Collapse title={aboutTitle} content={aboutContent} />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
