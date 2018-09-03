import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkPage = () => (
    <section className="work-page">
        <h3>Projects:</h3>
        <NavLink className="work-page__item" to="/droidify" exact={true}>
            <img src="./images/sophia.png" />
            <h1>Droidify</h1>
        </NavLink>
        <NavLink className="work-page__item" to="/calm-corner" exact={true}>
            <img src="./images/calmcorner.gif" />
            <h1 className="title">Calm Corner</h1>
        </NavLink>
        <NavLink className="work-page__item" to="/expenselog" exact={true}>
            <img src="./images/ftb.png" />
            <h1>Expense Log</h1>
        </NavLink>
    </section>
);
export default WorkPage;