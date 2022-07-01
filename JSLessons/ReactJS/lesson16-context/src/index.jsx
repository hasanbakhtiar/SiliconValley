import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddMovies from './AddMovies';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <Nav />
      <AddMovies />
      <MovieList />
    </MovieProvider>
  </React.StrictMode>
);


