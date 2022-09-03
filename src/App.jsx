import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimeProvider } from "./context/AnimesProvider";

import { Layout } from "./layout/Layout";
import { Categorias } from "./pages/Categorias";

import { Listado } from "./pages/Listado";

import { VerAnime } from "./pages/VerAnime";

function App() {
  return (
    <AnimeProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Listado />} />
          <Route path="/categorias" element={<Categorias />} />

          <Route path="/ver-anime/:id" element={<VerAnime />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AnimeProvider>
  );
}

export default App;
