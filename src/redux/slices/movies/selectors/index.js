import { createSelector } from 'reselect';

const getMovies = state => state.movies;

export const getMoviesList = createSelector(getMovies, movies =>
  Object.values(movies),
);

export const getIsMoviesList = createSelector(
  getMoviesList,
  movies => !!movies.length,
);
