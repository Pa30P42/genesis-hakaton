import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/slices/auth';
import { getCurrentUser } from '../../redux/slices/auth/selectors';
import Profile from './components/Profile';

function ProfilePage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const editUserProfile = user => {
    dispatch(editUser(user));
  };

  return (
    <Profile editUserProfile={editUserProfile} currentUser={currentUser} />
  );
}

export default ProfilePage;
