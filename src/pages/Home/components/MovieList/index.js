import React from 'react';
import MovieListItem from '../MovieListItem';
import './style.scss';

const MovieList = ({ items }) => {
  return (
    <div className="filmContainer">
      {items.map(item => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MovieList;
