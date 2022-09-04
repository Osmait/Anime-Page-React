import React from "react";
import {Link} from 'react-router-dom'

export const Anime = ({ anime }) => {
  const { title, image,_id } = anime;

  
  return (
    <div className="anime">
      <div className="anime__imagenes">
        <img className="imagen" src={image} alt={`imagen ${title}`} />
      </div>
      <h3 className="anime__titulo">{title}</h3>
      <Link className="links" to={`/ver-anime/${_id}`} >Ver Mas</Link>
    </div>
  );
};
