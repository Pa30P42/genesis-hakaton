import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUsers } from '../../redux/slices/auth/selectors';
import { createNewUser, loginUser } from '../../redux/slices/auth';
import AuthForm from './components/AuthForm';
import { v4 as uuidv4 } from 'uuid';

const AuthPage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = history.location.pathname;

  const onSubmit = values => {
    if (location === '/signup') {
      return (
        !users.filter(user => user.email === values.email)[0] &&
        dispatch(
          createNewUser({
            name: '',
            email: values.email,
            password: values.password,
            id: uuidv4(),
          }),
        ) &&
        history.push('/')
      );
    }
    if (location === '/signin') {
      const user = users.filter(user => user.email === values.email && user)[0];
      return (
        user.id &&
        dispatch(
          loginUser({
            name: user.name,
            email: user.email,
            id: user.id,
          }),
        ) &&
        history.push('/')
      );
    }
    return;
  };

  return <AuthForm onSubmit={onSubmit} users={users} location={location} />;
};

export default AuthPage;
