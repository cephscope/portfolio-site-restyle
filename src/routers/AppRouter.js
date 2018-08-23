import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import WorkPage from '../components/WorkPage';
import ProjectsHeader from '../components/ProjectsHeader';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Contact from '../components/Contact';
import CalmCornerPage from '../components/CalmCornerPage';
import ExpenseLogPage from '../components/ExpenseLogPage';
import Droidify from '../components/DroidifyPage';

const AppRouter = () => (
  <BrowserRouter>
    <div id="container">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/projects" component={WorkPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/calm-corner" component={CalmCornerPage} />
          <Route path="/droidify" component={Droidify} />
          <Route path="/expenselog" component={ExpenseLogPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default AppRouter; 
/* <Route path="/projects" exact={true} component={ProjectsHeader} /> */