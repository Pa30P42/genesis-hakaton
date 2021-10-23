import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { batch } from 'react-redux';
// import getTransactions from 'API/getTransactions';
// import { ITxsState } from '@/interfaces/TransactionState.interface';

const initialState = {
  movies: [],
  activePage: 1,
  totalPages: 0,
};

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  },
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTransactions: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});
