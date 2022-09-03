import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VerAnime = () => {
  const [anime, setAnime] = useState({});

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const consultaAPI = (id) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9f617679f6msh6c2842eda8c4eb4p184e38jsna6b526968bf2",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      };

      fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options)
        .then((response) => response.json())
        .then((response) => setAnime(response))
        .catch((err) => console.error(err));
    };
    consultaAPI(id);
  }, []);

  const { title, synopsis, image, episodes, ranking, status } = anime;

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        {" "}
        Cantiada de Episodios: <span>{episodes}</span>
      </p>
      <p> Top:{ranking}</p>
      <p> Estatus: {status}</p>
      <p>{synopsis}</p>
    </div>
  );
};
