import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-container">
    404
    <br />
    <br />
    <NavLink className="text__item" to="/" exact={true}>Head back</NavLink>
  </div>
);

export default NotFoundPage;