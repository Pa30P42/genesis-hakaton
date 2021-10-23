import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesThunk } from './thunks/index';

const initialState = {};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    deleteMovie: (state, { payload }) => {
      delete state[payload];
    },
    addMovie: (state, { payload }) => {
      state[payload.id] = payload;
    },
    editMovie: (state, { payload }) => {
      state[payload.id] = payload;
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

export const { deleteMovie, addMovie, editMovie } = moviesSlice.actions;
