import { Error } from "../components/Error";
import { ListadoPorCategoria } from "../components/ListadoPorCategoria";
import useAnime from "../hooks/useAnime";

export const Categorias = () => {
  const { categorias, handleChanger} = useAnime();
  

  return (
    <>
       {
      <form>
        <label>Categorias</label>
        <select onChange={handleChanger}>
          
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
