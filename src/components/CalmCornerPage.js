import React from 'react';

const CalmCornerPage = () => {
  return (
    <section className="work-detail">
        <a href="https://calm.roycathey.org" target="_blank" className="work-detail__item">
          <img src="./images/cc.png" />
          <h1>Take it for a spin →</h1>
        </a>
        <p>A synthesizer in your browser.</p>
        <p>Every sound and sequence custom-programmed using the Tone.js API.</p>
        <p>Animations drawn and audio-synced using the P5.js API.</p>
        <a className="section-link" href="https://github.com/cephscope/noise" target="_blank">View project on GitHub</a>
    </section>
  );
};

export default CalmCornerPage;