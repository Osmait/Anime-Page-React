
import useAnime from "../hooks/useAnime";
import { Anime } from "./Anime";
import { Error } from "./Error";

export const ListadoAnime = () => {
    const { animes, errorP }= useAnime()


  return (
    <main className="contenedor listado">
      <div className="listado__contenedo"></div>
      <h2 className="listado__titulo">Listado Animes</h2>
      {
        !errorP ?
        <section className="listado__animes">
        {
          animes.map((anime) => (
            <Anime key={anime._id} anime={anime} />
            ))}
      </section>
         :<Error>404 Not Found Intente mas tarde  </Error> }
    </main>
  );
};
