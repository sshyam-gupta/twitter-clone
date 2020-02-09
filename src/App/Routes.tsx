import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import PageError from '../shared/components/PageError';
import UserPage from '../screens/UserPage';
import { Container } from './BaseStyle';
import TweetPage from '../screens/TweetPage';

export const customHistory = createBrowserHistory();


const Routes = () => (
  <Container>
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={PageError} />
        <Route exact path="/user" component={PageError} />
        <Route exact path="/user/:userId" component={UserPage} />

        <Redirect exact from="/tweet" to="/tweet/1226557433926963200" />
        <Route exact path="/tweet/:tweetId" component={TweetPage} />

        <Route component={PageError} />
      </Switch>
    </Router>
  </Container>
);

export default Routes;