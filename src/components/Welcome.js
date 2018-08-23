import React from 'react';
import { P5Wrapper } from './P5Wrapper';
import monolith from '../utils/sketches/monolith';

const Welcome = () => {
  return (
    <section>
      <div id="welcome">
        <h1>Hi, I'm Roy.</h1>
        <p>I'm a front-end developer living in New York City. I really like making stuff on the internet using emerging web technologies.</p>
        <p>Take a look around.</p>
        <p>Make yourself at home.</p>
        <p>Do you prefer coffee or tea?</p>
      </div>
      <div id="monolith">
        <P5Wrapper sketch={monolith} />
      </div>
    </section>
  );
}

export default Welcome;
