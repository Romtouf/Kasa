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
      <div className="logement_infos">
        <h2 className="logement_infos_title">{dataLogement.title}</h2>
        <p className="logement_infos_location">{dataLogement.location}</p>
        {/* Ajouter le composant Host */}
      </div>
      <div className="logement_extras">
        <Tags tags={dataLogement.tags} />
        {/* Ajouter le composant Rating */}
      </div>

      {/* <Collapse
        description={dataLogement.description}
        equipments={dataLogement.equipments}
      /> */}
    </div>
  );
};

export default Logements;
