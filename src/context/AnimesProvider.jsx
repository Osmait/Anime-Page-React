import {useState,useEffect,createContext} from 'react'

const AnimeContext = createContext()


const AnimeProvider = ({children}) =>{

    const [animes, setanimes] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [ categoria, setCategoria] = useState('Award Winning')
    const [AnimesPorCategoria, setAnimesPorCategoria] = useState([]);
    const [busqueda,setBusqueda] = useState('')
  

// Consulta las categorias 
    useEffect(() => {
      const consultaCategoria = async () => {

        try {
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "9f617679f6msh6c2842eda8c4eb4p184e38jsna6b526968bf2",
              "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
            },
          };
          
        const respuesta = await fetch("https://anime-db.p.rapidapi.com/genre", options)
        const resultado =  await respuesta.json()
        
        setCategorias(resultado)
      
        } catch (error) {
          console.log(error)
          

        }
       
        
        
         
      };
      consultaCategoria();
    }, []);

// Consulta de inicio
    useEffect(() => {
        const consultarAPI = () => {
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "9f617679f6msh6c2842eda8c4eb4p184e38jsna6b526968bf2",
              "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
            },
          };
    
          fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10', options)
            .then((response) => response.json())
            .then((respuesta) => {
              const { data } = respuesta;
              
              setanimes(data);
              setErrorP(false)
            })
            .catch((err) =>{
              console.error(err)
              
            });
            
        };
    
        consultarAPI();
      }, []);


// Consulta de inicio
      useEffect(() => {
        const consultarAPI = () => {
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "9f617679f6msh6c2842eda8c4eb4p184e38jsna6b526968bf2",
              "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
            },
          };
    
          fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=${categoria}`, options)
            .then((response) => response.json())
            .then((respuesta) => {
              const { data } = respuesta;
              
              setAnimesPorCategoria(data);
              
              
            })
            .catch((err) => {
              console.error(err)
              
            });
            
        };
    
        consultarAPI();
      }, [categorias]);


 
  

  useEffect(() => {
    const consultarAPI = () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9f617679f6msh6c2842eda8c4eb4p184e38jsna6b526968bf2",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      };

      fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${busqueda}`, options)
        .then((response) => response.json())
        .then((respuesta) => {
          const { data } = respuesta;
          
          setanimes(data);
        })
        .catch((err) => {
          console.error(err)
          
        });
        
    };

    consultarAPI();
  }, [busqueda]);




 



 

  const handleChanger = e => {
    setCategoria(e.target.value)
  }

  const handleBusqueda = e => {
    setBusqueda(e.target.value)
  }



    return (
        <AnimeContext.Provider
            value={{
                categorias,
                animes,
                categoria,
                handleChanger,
                AnimesPorCategoria,
                busqueda,
                handleBusqueda,
               
                

            }}
        >
            {children}
        </AnimeContext.Provider>


    )

}


export{
    AnimeProvider
}


export default AnimeContext