import React from 'react';

export default (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.copy}</p>
    <a target="_blank" href={props.demoLink}>Demo</a>
    <a target="_blank" href={props.gitHubLink}>Source</a>
  </div>
);