import React from 'react';

export default (props) => (
  <div className="project">
    <div className="project-image">
      <img src={props.image} />
    </div>
    <div className="project-info">
      <h1>{props.title}</h1>
      <p>{props.copy}</p>
      <div className="project-links">
        <a className="project-link" target="_blank" href={props.demoLink}>Live site</a>
        <a className="project-link" target="_blank" href={props.gitHubLink}>GitHub repo</a>
      </div>
    </div>
  </div>
);