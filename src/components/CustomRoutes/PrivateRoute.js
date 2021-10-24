import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './withRouterHoc';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  return <Route component={Component} {...routeProps} />;
};

export default withAuth(PrivateRoute);
