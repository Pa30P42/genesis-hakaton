import React from 'react';
import MovieListItem from '../MovieListItem';
import './style.scss';

const MovieList = ({ movie }) => {
  return (
    <div className="filmContainer">
      {movie.map(movie => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
