import React from 'react';
import { NavLink } from 'react-router-dom';
import { homeRoute, signInRoute, signUpRoute } from '../../routes';
// import {
//   NavigationContainer,
//   //   NavLink,
// } from './navigationStyled';

import { useSelector } from 'react-redux';
import { isUserSignIn } from '../../redux/slices/auth/selectors';

const Navigation = () => {
  const isUserActive = useSelector(isUserSignIn);

  return (
    <nav>
      <NavLink
        to={homeRoute.path}
        activeClassName="active"
        // onClick={onHandleChange}
      >
        Home
      </NavLink>

      {!isUserActive ? (
        <div>
          <NavLink
            to={signInRoute.path}
            exact
            activeClassName="active"
            // onClick={onHandleChange}
          >
            Sign In
          </NavLink>
          <NavLink
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
  );
};

export default Navigation;
