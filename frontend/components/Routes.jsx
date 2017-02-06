import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/store';
import { LandingPage, Navbar } from './index';

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={LandingPage} path="/signin" />
      <Route path="/">
        <IndexRoute component={Navbar} />
        {/* <Route component={} path="account" /> */}
        {/* <Route component={} path="browse" /> */}
        {/* <Route component={} path="create" /> */}
        {/* <Route component={} path="document/:id" /> */}
        {/* <Route component={} path=":id" /> */}
      </Route>
    </Router>
  </Provider>
);

export default Routes;