import React from "react";
import Carrousel from "../components/Carrousel";
import { Navigate, useParams } from "react-router-dom";
import data from "../data/annonces.json";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const Logements = () => {
  const params = useParams().id;
  const dataLogement = data.find((data) => data.id === params);
  const equipments = dataLogement?.equipments?.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  // console.log(dataLogement.pictures);
  if (!dataLogement) {
    return <Navigate to="*" />;
  }
  return (
    <div className="logement">
      <Carrousel pictures={dataLogement.pictures} title={dataLogement.title} />
      <div className="logement__infos">
        <div className="logement__infos__text">
          <h2 className="logement__infos__text__title">{dataLogement.title}</h2>
          <p className="logement__infos__text__location">
            {dataLogement.location}
          </p>
          <Tags tags={dataLogement.tags} />
        </div>
        <div className="logement__infos__hostrating">
          <Host
            name={dataLogement.host.name}
            picture={dataLogement.host.picture}
          />
          <Rating stars={dataLogement.rating} />
        </div>
      </div>

      <div className="logement__collapse">
        <Collapse title="Description" content={dataLogement.description} />
        <Collapse title="Equipements" content={equipments} />
      </div>
    </div>
  );
};

export default Logements;
