import React from 'react';

const Welcome = () => {
  return (
    <section>
      <div id="welcome">
        <h1>Hi, I'm Roy.</h1>
        <p>I'm a front-end developer living in New York City. I really like making stuff on the internet using emerging web technologies.</p>
        <br />
        <p className="section-link"><a className="section-link" href="https://github.com/rycthy" target="_blank">GitHub</a></p>
        <p className="section-link"><a className="section-link" href="mailto:rccathey@gmail.com">Email</a></p>
        <p className="section-link"><a className="section-link" href="https://www.linkedin.com/in/roy-cathey/" target="_blank">LinkedIn</a></p>
      </div>
    </section>
  );
}

export default Welcome;
