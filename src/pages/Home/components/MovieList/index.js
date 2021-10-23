import React from 'react';
import MovieListItem from '../MovieListItem';
import mockData from './mockData';

const MovieList = () => {
  const testItem = mockData;

  return (
    <div>
      <p>List:</p>
      <div className="filmContainer">
        {testItem.map(item => (
          <MovieListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
