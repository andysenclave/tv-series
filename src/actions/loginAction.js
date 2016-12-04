import *  as types from '../constants/actionTypes';

//import dateHelper from '../utils/dateHelper';

const loginChecked = true;

export const validateLoginData = (data) => {
  return {
    type: 'VALIDATE_LOGIN_DATA',
    loginChecked
  }
}
