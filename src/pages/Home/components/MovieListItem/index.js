import React, { memo } from 'react';
import SmartText from '../../../../components/SmartText/SmartText';
import './style.scss';
import { Link } from 'react-router-dom';

const MovieListmovie = ({ movie }) => (
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
        Release date: {new Date(movie.release_date).toLocaleDateString()}
      </p>
      <p className="movieRate">Rate: {movie.vote_average}</p>
      <SmartText className="movieOverview" text={movie.overview} />
    </div>
  </Link>
);

export default memo(MovieListmovie);
