import React from 'react';
import MovieListItem from '../MovieListItem';
import mockData from './mockData';

const MovieList = () => {
  const testItem = mockData;

  return (
    <div>
      <p>List:</p>
      {testItem.map(item => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MovieList;
