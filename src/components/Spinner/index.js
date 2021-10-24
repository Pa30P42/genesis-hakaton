import React from 'react';
import Loader from 'react-loader-spinner';
import './style.scss';

function Spinner() {
  return (
    <div className="spinnerWrapper">
      <Loader type="TailSpin" color="#41483c" height={70} width={70} />
    </div>
  );
}

export default Spinner;
