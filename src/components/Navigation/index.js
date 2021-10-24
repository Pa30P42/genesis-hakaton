import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  homeRoute,
  profileRoute,
  signInRoute,
  signUpRoute,
} from '../../routes';
import {
  getCurrentUser,
  isUserSignIn,
} from '../../redux/slices/auth/selectors';
import { logoutUser } from '../../redux/slices/auth';
import './styles.scss';
import Logo from '../Logo';

const Navigation = () => {
  const isUserActive = useSelector(isUserSignIn);
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const logoutHandler = () => dispatch(logoutUser());

  return (
    <div className="container">
      <nav className="navigation">
        <div className="logoContainer">
          <Logo />
          <NavLink
            exact={homeRoute.exact}
            className="navLink homeLink "
            to={homeRoute.path}
            activeClassName="active"
            // onClick={onHandleChange}
          >
            Home
          </NavLink>
          {isUserActive && (
            <NavLink
              exact={profileRoute.exact}
              className="navLink"
              to={profileRoute.path}
              activeClassName="active"
              // onClick={onHandleChange}
            >
              Profile
            </NavLink>
          )}
        </div>
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
          <div>
            <span className="helloUser">
              Hello, {currentUser.name ? currentUser.name : 'dear Guest'}
            </span>
            <button className="logoutBtn" onClick={logoutHandler}>
              Log Out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
