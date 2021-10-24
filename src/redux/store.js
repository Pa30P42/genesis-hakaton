import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { moviesReducer } from './slices/movies';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slices/auth';

const persistConfig = {
  key: 'authType',
  storage: storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
