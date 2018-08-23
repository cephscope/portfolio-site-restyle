import React from 'react';

const Droidify = () => {
  return (
    <section className="work-detail">
        <a href="https://droidify.roycathey.org/" target="_blank" className="work-detail__item">
          <img src="./images/sophia2.png" />
          <h1>take a look</h1>
        </a>
        <h1>Droidify</h1>
        <p>Modern, mobile-friendly landing page for a new product.*</p>
        <p>* Product is in this case fictional.</p>
        <br />
        <a className="section-link" href="https://github.com/cephscope/mock-landing-page" target="_blank">View project on GitHub</a>
    </section>
  );
};

export default Droidify;