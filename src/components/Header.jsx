import {Link} from 'react-router-dom'
import useAnime from '../hooks/useAnime';

export const Header = () => {

  const { handleBusqueda, busqueda }= useAnime()

    
  return (
  
     
        <header className="header">

          <h1 className="header__title">AnimeSB</h1>

          <div className='buscador'>
            <form>
              <input
              className='buscador__input'
              type='text'
              onChange={handleBusqueda}
              value={busqueda}
              placeholder="Buscar Animes"
              />
            </form>
            </div>

          <div className="header__barra">

            <div className='header__nav' >
            <nav className="nav__links">
              <Link  to="/">Inicio</Link>
              <Link to="/categorias">Categorias</Link>
            </nav>
            </div>

           
          
            
          </div>
        </header>
      
 
  );
};
