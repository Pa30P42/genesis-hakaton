import React from 'react';
import { withRouter } from 'react-router';

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }
  return withRouter(WithAuth);
};

export default withAuth;
