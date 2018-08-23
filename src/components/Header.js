import React from 'react';
import Nav from './Nav';
import torus from '../utils/sketches/torus';
import { P5Wrapper } from './P5Wrapper';

const Header = () => (
  <header>
    <div id="torus">
      <P5Wrapper sketch={torus} />
    </div>
    <Nav />
  </header>
);

export default Header;