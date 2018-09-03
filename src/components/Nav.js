import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <NavLink className="nav__link" activeClassName="nav__link__active" to="/" exact={true}>
            <h2>Back</h2>
        </NavLink>
    </div>
);

export default Nav;
