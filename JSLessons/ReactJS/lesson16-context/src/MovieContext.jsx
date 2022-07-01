import React,{ useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState([
        {
            name: 'Interstaller',
            price: '$10',
            id: 12230
        },
        {
            name: 'Inseption',
            price: '$15',
            id: 12365123
        },
        {
            name: 'Batman',
            price: '$25',
            id: 16351723
        }
        
    ])
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
    </MovieContext.Provider>
  )
}
