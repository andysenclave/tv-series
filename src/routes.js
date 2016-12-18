import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DemoModule from './containers/DemoModule';
import Login from './containers/Login';
import NotFoundPage from './containers/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DemoModule}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
