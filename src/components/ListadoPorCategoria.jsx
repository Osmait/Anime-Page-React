import React from 'react'
import useAnime from '../hooks/useAnime'
import { Anime } from './Anime'

export const ListadoPorCategoria = () => {

    const { AnimesPorCategoria }= useAnime()
    console.log(AnimesPorCategoria)

  return (
    <main className="contenedor listado">
    <h2 className="listado__contenedo">Listado Animes</h2>
    <section className="listado__animes">
      {AnimesPorCategoria.map((anime) => (
        <Anime key={anime._id} anime={anime} />
      ))}
    </section>
  </main>
  )
}
