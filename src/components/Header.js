import React from 'react';
import Nav from './Nav';
import sphere from '../utils/sketches/sphere';
import { P5Wrapper } from './P5Wrapper';

const Header = () => (
  <header>
    <div id="sphere">
      <P5Wrapper sketch={sphere} />
    </div>
    <Nav />
  </header>
);

export default Header;