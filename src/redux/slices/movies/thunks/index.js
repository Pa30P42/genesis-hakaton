import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../../../API/movies';

export const fetchMoviesThunk = createAsyncThunk('movies/fetch', async () => {
  const movies1 = await getMovies(1)
    .then(res => res.json())
    .then(data => data.results);
  const movies2 = await getMovies(2)
    .then(res => res.json())
    .then(data => data.results);
  const movies3 = await getMovies(3)
    .then(res => res.json())
    .then(data => data.results);

  return [...movies1, ...movies2, ...movies3];
});
