import React from 'react';
import { Link } from 'react-router-dom';
import { homeRoute } from '../../routes';
import './style.scss';

const Logo = () => {
  return (
    <Link to={homeRoute.path} className="logoIcon">
      <p className="logoText">Filmster</p>
    </Link>
  );
};

export default Logo;
