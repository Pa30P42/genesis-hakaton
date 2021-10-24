import React from 'react';

function ErrorValidation({ touched, message }) {
  return touched === false && <div>&nbsp;</div> ? (
    message && <div>{message}</div>
  ) : (
    <div />
  );
}

export default ErrorValidation;
