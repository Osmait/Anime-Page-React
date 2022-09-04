
import { ListadoPorCategoria } from "../components/ListadoPorCategoria";
import useAnime from "../hooks/useAnime";

export const Categorias = () => {
  const { categorias, handleChanger} = useAnime();  
  

  return (
    <>
       {
      <form className="formulario">
        <label className="formulario__label">Categorias</label>
        <select className="formulario__select" onChange={handleChanger}>
          
          { categorias.map((categoria) => {
            const { _id } = categoria;
            return (
              <option key={_id} value={_id}>
                {_id}
              </option>
            );
          })}
        </select>
      </form>

}
      <ListadoPorCategoria/>
    </>
  );
};
