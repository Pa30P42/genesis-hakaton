import { createSelector } from 'reselect';

const getMovies = state => state.movies;

export const getMoviesList = createSelector(getMovies, movies =>
  Object.values(movies),
);

export const getMoviesById = createSelector(
  getMovies,
  (_, id) => id,
  (movies, id) => movies[id],
);

export const getIsMoviesList = createSelector(
  getMoviesList,
  movies => !!movies.length,
);
