import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './withRouterHoc';

const PrivateRoute = ({ component: Component, ...routeProps }) => (
  <Route {...routeProps}>
    <Component />
  </Route>
);

export default withAuth(PrivateRoute);
