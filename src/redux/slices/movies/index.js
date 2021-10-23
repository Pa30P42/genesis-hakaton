import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesThunk } from './thunks/index';

const initialState = {};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMoviesThunk.fulfilled]: (state, action) => {
      const movies = action.payload;
      return movies.reduce((acc, movie) => ({ ...acc, [movie.id]: movie }), {});
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
