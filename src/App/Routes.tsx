import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import PageError from '../shared/components/PageError';
import UserPage from '../screens/UserPage';
import { Container } from './BaseStyle';

const customHistory = createBrowserHistory();


const Routes = () => (
  <Container>
    <Router history={customHistory}>
      <Switch>
        <Redirect exact from="/" to="/user:userId" />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route component={PageError} />
      </Switch>
    </Router>
  </Container>
);

export default Routes;