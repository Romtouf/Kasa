import React from "react";
import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";
import data from "../data/annonces.json";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";

const Logements = () => {
  const params = useParams().id;
  const dataLogement = data.find((data) => data.id === params);

  return (
    <div className="logement">
      <img src={dataLogement.pictures[0]} />
      <h2>{dataLogement.title}</h2>
      <h3>{dataLogement.location}</h3>
      <Tags tags={dataLogement.tags} />
      {/* <Collapse
        description={dataLogement.description}
        equipments={dataLogement.equipments}
      /> */}
    </div>
  );
};

export default Logements;
