import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/annonces.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="galleryHome">
        {data.map(({ id, title, cover }) => (
          <NavLink className="galleryCard" key={id} to={`/logement/${id}`}>
            <Card title={title} cover={cover} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
