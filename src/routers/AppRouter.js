import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import WorkPage from '../components/WorkPage';
import Welcome from '../components/Welcome';
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
          <Route path="/droidify" component={Droidify} />
          <Route path="/calm-corner" component={CalmCornerPage} />
          <Route path="/expenselog" component={ExpenseLogPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default AppRouter; 
