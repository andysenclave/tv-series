import { DEMO_FORM_SUBMIT, DEMO_FORM_LOAD } from '../constants/actionTypes';
import {merge} from 'lodash';

const defaultState = {};

export default function (state = defaultState , action) {
  switch (action.type) {

    case DEMO_FORM_SUBMIT: {
      let newState = merge({}, state, {demoReducer:action.data});
      return newState;
    }
    case DEMO_FORM_LOAD: {
      return state;
    }
    default:
      return state;
  }
}
