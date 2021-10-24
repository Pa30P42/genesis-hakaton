import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { homeRoute, signInRoute, signUpRoute } from '../../routes';

import { useSelector } from 'react-redux';
import { isUserSignIn } from '../../redux/slices/auth/selectors';

const Navigation = () => {
  const isUserActive = useSelector(isUserSignIn);

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
          <button>Log Out</button>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
