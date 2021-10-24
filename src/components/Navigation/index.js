import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { homeRoute, signInRoute, signUpRoute } from '../../routes';
import { isUserSignIn } from '../../redux/slices/auth/selectors';
import { logoutUser } from '../../redux/slices/auth';
import './styles.scss';

const Navigation = () => {
  const isUserActive = useSelector(isUserSignIn);
  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logoutUser());
  return (
    <div className="container">
      <nav className="navigation">
        <NavLink
          className="navLink"
          to={homeRoute.path}
          activeClassName="active"
          // onClick={onHandleChange}
        >
          Home
        </NavLink>

        {!isUserActive ? (
          <div className="auth">
            <NavLink
              className="authNavLink authNavLinkLeft"
              to={signInRoute.path}
              exact
              activeClassName="active"
              // onClick={onHandleChange}
            >
              Sign In
            </NavLink>
            <NavLink
              className="authNavLink"
              to={signUpRoute.path}
              activeClassName="active"
              // onClick={onHandleChange}
            >
              Sign Up
            </NavLink>
          </div>
        ) : (
          <button onClick={logoutHandler}>Log Out</button>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
