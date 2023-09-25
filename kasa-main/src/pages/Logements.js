import React from "react";
import Carrousel from "../components/Carrousel";
import { Navigate, useParams } from "react-router-dom";
import data from "../data/annonces.json";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";

const Logements = () => {
  const params = useParams().id;
  const dataLogement = data.find((data) => data.id === params);
  if (!dataLogement) {
    return <Navigate to="*" />;
  }
  return (
    <div className="logement">
      <img src={dataLogement.pictures[0]} />
      <div className="logement_infos">
        <div className="logement_infos_text">
          <h2 className="logement_infos_text_title">{dataLogement.title}</h2>
          <p className="logement_infos_text_location">
            {dataLogement.location}
          </p>
          <Tags tags={dataLogement.tags} />
        </div>
        <div className="logement_infos_host">
          <Host
            name={dataLogement.host.name}
            picture={dataLogement.host.picture}
          />
          <Rating stars={dataLogement.rating} />
        </div>
      </div>

      {/* <Collapse
        description={dataLogement.description}
        equipments={dataLogement.equipments}
      /> */}
    </div>
  );
};

export default Logements;
