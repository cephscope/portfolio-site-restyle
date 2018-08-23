import React from 'react';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <div className="text-container">
      Roy Cathey is a front-end web developer
      <br />
      <br />
      born in Texas c. 1992
      <br />
      <br />
      living and working in New York City.
      <br />
      <br />
      <br />
      <br />
      Development toolset includes but is not limited to:
      <br />
      <br />
      Javascript, React.js, Redux, HTML, CSS, Git
      <br />
      <br />
      <br />
      <br />
      Education:
      <br />
      <br />
      The Univeristy of Texas at Austin
      <br />
      <br />
      <br />
      <br />
      <NavLink className="text__item" to="/contact">Contact</NavLink>
    </div>
  );
}

export default About;