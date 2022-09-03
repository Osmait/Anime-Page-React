import {useContext} from 'react'
import AnimeContext from '../context/AnimesProvider'

const useAnime = ()=>{
    return useContext(AnimeContext)
}


export default useAnime

