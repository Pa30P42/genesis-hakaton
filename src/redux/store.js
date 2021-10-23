import { combineReducers, createStore } from 'redux';
import { moviesReducer } from './slices/movies';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = createStore({ reducer: rootReducer });
