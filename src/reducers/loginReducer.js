import {VALIDATE_LOGIN_DATA} from '../constants/actionTypes';
import {login} from './initialState';


export default function loginReducer(state = login.loginData, action) {

  switch (action.type) {
    case VALIDATE_LOGIN_DATA:
      return {...state};

    default:
      return state;
  }
}
