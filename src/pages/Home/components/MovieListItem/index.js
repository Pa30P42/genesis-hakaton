import React from 'react';
import SmartText from '../../../../components/SmartText/SmartText';
import './style.scss';
import { Link } from 'react-router-dom';

const MovieListmovie = ({ movie }) => {
  const date = new Date(movie.release_date);

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movieListItem">
        <img
          className="moviePic"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie pic"
          width="100%"
        />
        <p className="movieTitle"> {movie.title}</p>
        <p className="movieRelease">
          Release date: {date.toLocaleDateString()}
        </p>
        <p className="movieRate">Rate: {movie.vote_average}</p>
        <SmartText className="movieOverview" text={movie.overview} />
      </div>
    </Link>
  );
};

export default MovieListmovie;
