import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { moviesReducer } from './slices/movies';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authType',
  storage: storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
