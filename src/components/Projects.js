import React from 'react';
import Project from './Project';


export class Projects extends React.Component {
  state = {
    projects: [
      {
        key: 'expenseLog',
        imageLink: 'https://res.cloudinary.com/dnqc6pmtp/image/upload/v1539190868/porfolio/expenselog.png',
        title: 'Expense Log',
        copy: 'An application to record, search, and filter your expenses. Expense Logger authenticates each user, giving them access to a private database. I used Redux (with middleware) for state management, so managing your expenses is quick and painless even when dispatching to the database.',
        demoLink: 'https://expense--app.herokuapp.com/',
        gitHubLink: 'https://github.com/rycthy/exepense-app'
      },
      {
        key: 'droidify',
        imageLink: 'https://res.cloudinary.com/dnqc6pmtp/image/upload/v1539190808/porfolio/droidifyy.png',
        title: 'Droidify',
        copy: 'A modern, mobile-friendly landing page for a new product. Droidify is what happens when I showcase my ability to build a responsive landing page that draws the customer in with video and dynamic content. Instead of using a real-world product, I decided to see how convincing I could make a (speculatively) fictional product launch look.',
        demoLink: 'https://droidify.roycathey.org/',
        gitHubLink: 'https://github.com/rycthy/mock-landing-page'
      },
      {
        key: 'calmCorner',
        imageLink: 'https://res.cloudinary.com/dnqc6pmtp/image/upload/v1539190837/porfolio/calmc.png',
        title: 'Calm Corner',
        copy: 'An ambient soundscape at the tip of your fingers. My goal with Calm Corner was to create a little oasis on the internet. Using the Tone.js library, I designed sounds and sequences to be controlled by the user. Each layer can be played solo or alongside the others, inviting you to explore the soundscape at your leisure. To maximise immersion, I created animations using the P5.js API and synced them to the audio. I wanted the interface to be as minimal as possible: just images and sound. It\'s designed so that there isn\'t a wrong move to make — just start clicking around enjoy what you create.',
        demoLink: 'https://calm.roycathey.org/',
        gitHubLink: 'https://github.com/rycthy/noise'
      }
    ]
  }
  render() {
    return (
      <section className="projects">
        {
          this.state.projects.map((e) => {
            return <Project
            key={e.key}
            image={e.imageLink}
            title={e.title}
            copy={e.copy}
            demoLink={e.demoLink}
            gitHubLink={e.gitHubLink}
          />;
          })
        }
      </section>
    );
  }
}
