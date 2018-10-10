import React from 'react';

export default (props) => (
  <div className="project">
    <div className="project-image">
      <img src={props.image} />
    </div>
    <div className="project-info">
      <h1>{props.title}</h1>
      <p>{props.copy}</p>
      <a target="_blank" href={props.demoLink}>Demo</a>
      <a target="_blank" href={props.gitHubLink}>Source</a>
    </div>
  </div>
);