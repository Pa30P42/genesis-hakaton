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
      console.log(`state`, state);
      console.log(`payload`, payload);
      const filteredUsers = [
        ...state.users.filter(user => user.email !== payload.email),
      ];
      state.users = [...filteredUsers, payload];
    },
    logoutUser: state => {
      state.currentUser = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { createNewUser, loginUser, editUser, logoutUser } =
  authSlice.actions;
