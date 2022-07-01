import React,{useContext} from 'react'
import Movie from './Movie';
import {MovieContext} from './MovieContext';


const MovieList = () => {


    const [movies,setMovies] = useContext(MovieContext);
    

  return (
    <div>
        {movies.map(a=>(
            <Movie name={a.name} price={a.price} key={a.id}/>
        ))}
    </div>
  )
}

export default MovieList