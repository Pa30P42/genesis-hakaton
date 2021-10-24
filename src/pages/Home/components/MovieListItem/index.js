import React from 'react';
import SmartText from '../../../../components/SmartText/SmartText';
import './style.scss';

const MovieListItem = ({ item }) => {
  const date = new Date(item.release_date);

  return (
    <>
      <div className="movieListItem">
        <img
          className="moviePic"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt="movie pic"
          width="100%"
        />
        <p className="movieTitle"> {item.title}</p>
        <p className="movieRelease">
          Release date: {date.toLocaleDateString()}
        </p>
        <p className="movieRate">Rate: {item.vote_average}</p>
        <SmartText className="movieOverview" text={item.overview} />
      </div>
    </>
  );
};

export default MovieListItem;
