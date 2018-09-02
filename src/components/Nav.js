import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <NavLink className="nav__link" activeClassName="nav__link__active" to="/" exact={true}>
            <h2>Hello?</h2>
        </NavLink>
        <NavLink className="nav__link" activeClassName="nav__link__active" to="/projects" exact={true}>
            <h2>Projects</h2>
        </NavLink>
    </div>
);

export default Nav;

/*
<NavLink className="nav__item" to="/" exact={true}>
            <img className="nav__icon" src="./images/contact-icon.png" />
        </NavLink>
        <NavLink className="nav__item" to="/" exact={true}>
            <img className="nav__icon" src="./images/contact-icon.png" />
        </NavLink>
*/