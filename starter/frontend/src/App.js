import React, { useState } from 'react';
import MovieList from './components/MovieList.js';
import MovieDetails from './components/MovieDetails';
import './App.css';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>

      <MovieList onMovieClick={handleMovieClick} />

      <ul>
        <li>Top Gun: Maverick</li>
        <li>Sonic the Hedgehog</li>
        <li>A Quiet Place</li>
      </ul>

      {selectedMovie && (
        <>
          <h1>Movie Details</h1>
          <MovieDetails movie={selectedMovie} />
        </>
      )}
    </div>
  );
}
