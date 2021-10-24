import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    createNewUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    logoutUser: state => {
      state.currentUser = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { createNewUser, loginUser, logoutUser } = authSlice.actions;
