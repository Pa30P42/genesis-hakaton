import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: { email: '' },
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
    editUser: (state, { payload }) => {
      console.log(`state`, state.users);
      console.log(`payload`, payload);
      state.users = [
        state.users.filter(user => {
          user.email === payload.email ? payload : user;
        }),
      ];
    },
    logoutUser: state => {
      state.currentUser = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { createNewUser, loginUser, editUser, logoutUser } =
  authSlice.actions;
