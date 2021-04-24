import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Blog } from '../pages/Blog';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:slug" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
