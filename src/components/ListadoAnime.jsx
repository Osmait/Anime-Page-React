
import useAnime from "../hooks/useAnime";
import { Anime } from "./Anime";


export const ListadoAnime = () => {
    const { animes, e}= useAnime()


  return (
    <main className="contenedor listado">
      <div className="listado__contenedo"></div>
      <h2 className="listado__titulo">Listado Animes</h2>
      {
        
        <section className="listado__animes">
        {
          animes.map((anime) => (
            <Anime key={anime._id} anime={anime} />
            ))}
      </section>
         }
    </main>
  );
};
