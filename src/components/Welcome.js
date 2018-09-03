import React from 'react';
import WorkPage from './WorkPage';

const Welcome = () => {
  return (
    <div>
      <section>
        <div id="welcome">
          <h1>Hi, I'm Roy.</h1>
          <p>I'm a front-end developer living in New York City. I really like making stuff on the internet using emerging web technologies.</p>
          <div id="contact-links">
            <p className="section-link"><a className="section-link" href="https://github.com/rycthy" target="_blank">GitHub</a></p>
            <p className="section-link"><a className="section-link" href="mailto:rccathey@gmail.com">Email</a></p>
            <p className="section-link"><a className="section-link" href="https://www.linkedin.com/in/roy-cathey/" target="_blank">LinkedIn</a></p>
          </div>
        </div>
        <div class="scroll-down">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </section>
      <WorkPage />
    </div>
  );
}

export default Welcome;
