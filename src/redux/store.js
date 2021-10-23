import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './slices/movies';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});
