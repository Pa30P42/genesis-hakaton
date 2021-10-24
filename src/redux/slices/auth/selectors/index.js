import { createSelector } from 'reselect';

export const getUsers = state => state.auth.users;

export const getCurrentUser = state => state.auth.currentUser;

export const isUserSignIn = createSelector(
  getCurrentUser,
  currentUser => !!currentUser.email,
);

export const getUserById = createSelector(
  getUsers,
  (_, id) => id,
  (users, id) => users.find(user => user.id === id),
);
