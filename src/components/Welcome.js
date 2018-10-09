import React from 'react';
import WorkPage from './WorkPage';

const Welcome = () => {
  return (
    <div>
      <section>
        <div id="welcome">
          <h2>THIS IS A WEBSITE ABOUT</h2>
          <h1>ROY CATHEY</h1>
          <p>I'm a web developer living in New York City. I like building web applications that people actually enjoy using.</p>
          <div className="portrait">
            <p>I look like this: {`\xa0`}</p>
            <img src="./images/mesmall.jpeg" />
          </div>
          <div className="row-list">
            <p>Say hello, I'm harmless: <a className="section-link" href="https://github.com/rycthy" target="_blank">GitHub</a>
            {`,\xa0`}<a className="section-link" href="mailto:rccathey@gmail.com">Email</a>
            {`\xa0&\xa0`}<a className="section-link" href="https://www.linkedin.com/in/roy-cathey/" target="_blank">LinkedIn</a></p>
          </div>
          <h1 id="projects-header">PROJECTS</h1>
        </div>
      </section>
      <WorkPage />
    </div>
  );
}

export default Welcome;
// <h3>Core Development Toolset</h3>
//           <div className="row-list" id="toolset">
//             <span>
//               <i className="fab fa-js"></i>
//               <p>JavaScript</p>
//             </span>
//             <span>
//               <i className="fab fa-html5"></i>
//               <p>HTML5</p>
//             </span>
//             <span>
//               <i className="fab fa-css3"></i>
//               <p>CSS3</p>
//             </span>
//             <span>
//               <i className="fab fa-git"></i>
//               <p>git</p>
//             </span>
//             <span>
//               <i className="fab fa-react"></i>
//               <p>React.js</p>
//             </span>
//           </div>
//           <div className="scroll-down">
//             <div className="chevron"></div>
//             <div className="chevron"></div>
//             <div className="chevron"></div>
//           </div>