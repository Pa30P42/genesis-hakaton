import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './withRouterHoc';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  console.log(routeProps);

  return (
    <Route {...routeProps}>
      <Component />
    </Route>
  );
};

export default withAuth(PublicRoute);
