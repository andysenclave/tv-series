import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import loginReducer from './loginReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  loginReducer,
  routing: routerReducer
});

export default rootReducer;
