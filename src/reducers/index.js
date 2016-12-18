import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  demoReducer,
  routing: routerReducer
});

export default rootReducer;
