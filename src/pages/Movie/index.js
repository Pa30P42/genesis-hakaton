import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMoviesById } from '../../redux/slices/movies/selectors/index';
import './style.scss';

const Movie = () => {
  const { movie_id } = useParams();
  const chosenMovie = useSelector(state => getMoviesById(state, movie_id));

  return (
    <div className="product-container">
      <section className="product-card">
        <div className="wrapper">
          <div className="poster-left">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/original/${chosenMovie.poster_path}`}
            />
          </div>
          <div className="poster-info">
            <div className="poster-info_container">
              <h1 className="movie-title">{chosenMovie.title}</h1>
              <p className="release-day">
                Release Date: {chosenMovie.release_date}
              </p>
              <p className="rating">Avarage Rate: {chosenMovie.vote_average}</p>
              <div className="movie-descr">
                <h3 className="overview">Overview</h3>
                <div className="overview-content-dynamic">
                  {chosenMovie.overview}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-action">
            <div className="btn">
              <button className="delete">Delete</button>
            </div>
            <div className="btn">
              <button className="edit">Edit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Movie);
