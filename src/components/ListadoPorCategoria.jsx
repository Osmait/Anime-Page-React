import React from 'react'
import useAnime from '../hooks/useAnime'
import { Anime } from './Anime'

export const ListadoPorCategoria = () => {

    const { AnimesPorCategoria }= useAnime()

  return (
    <main className="container contenido-principal">
    <h2 className="titulo-anime">Listado Animes</h2>
    <section className="listado-animes">
      {AnimesPorCategoria.map((anime) => (
        <Anime key={anime._id} anime={anime} />
      ))}
    </section>
  </main>
  )
}
