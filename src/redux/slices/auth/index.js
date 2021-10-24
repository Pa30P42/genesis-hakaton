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
      const filteredUsers = [
        ...state.users.filter(user => user.email !== payload.email),
      ];
      const editedUser = { ...state.currentUser, ...payload };

      state.users = [...filteredUsers, editedUser];
      state.currentUser = { ...state.currentUser, ...payload };
    },
    logoutUser: state => {
      state.currentUser = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { createNewUser, loginUser, editUser, logoutUser } =
  authSlice.actions;
