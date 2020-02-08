import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import PageError from '../shared/components/PageError';
import Homepage from '../screens/Homepage';

const customHistory = createBrowserHistory();


const Routes = () => (
  <Router history={customHistory}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;