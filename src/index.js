import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {useRouterHistory} from 'react-router';
import { createHistory } from 'history';
import Routes from './routes';
import configureStore from './store/configureStore';
//import './styles/main.less';
import { syncHistoryWithStore } from 'react-router-redux';
require('es6-promise').polyfill();

const store = configureStore();

const getBase = () => {
  const path    = document.location.pathname;
  let base      = path;
  if(base === ""){
    base = "/";
  }
  return base;
};

// Updateing the history so that relative path should work for react route
const appHistory = useRouterHistory(createHistory)({
  basename: getBase()
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(appHistory, store);

render(
  <Provider store={store}>
    <Routes store={store}  history={history}/>
  </Provider>, document.getElementById('app')
);
