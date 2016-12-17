import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import DemoReducer from './demoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  demoReducer: DemoReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
