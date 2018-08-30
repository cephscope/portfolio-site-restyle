import React from 'react';

const Droidify = () => {
  return (
    <section className="work-detail">
        <a href="https://droidify.roycathey.org/" target="_blank" className="work-detail__item">
          <img src="./images/sophia2.png" />
          <h1>Have a look →</h1>
        </a>
        <h1>Droidify</h1>
        <p>A modern, mobile-friendly landing page for a new product.</p>
        <p>Droidify is what happens when I showcase my ability to build a responsive landing page that draws the customer in with video and dynamic content. Instead of using a real-world product, I decided to see how convincing I could make a (speculatively) fictional product launch look. <a className="section-link" href="https://droidify.roycathey.org" target="_blank">You be the judge.</a></p>
        <br />
        <a className="section-link" href="https://github.com/rycthy/mock-landing-page" target="_blank">View project on GitHub</a>
    </section>
  );
};

export default Droidify;