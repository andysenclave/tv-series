import axios from 'axios';
//import {hideGeneralError, displayGeneralError} from './actions/displayGeneralError';
const API_ROOT = '/api';
const NOT_FOUND = 404;
const API_DOMAIN = 'andysenclave.com'; //domain name
let BASE_URL;

function getEnvironmentVariable() {
  const hostName = window.location.hostname.split('-');
  if (parseInt(hostName.length, 10) === 1) {
    return 'www';
  } else {
    return `${hostName[0]}-${hostName[1].split('')[0]}`;
  }
}

if (window.location.hostname === 'localhost' || window.location.hostname.indexOf('client') !== -1) {
  BASE_URL = API_ROOT;
} else {
  BASE_URL = `${window.location.protocol}//${getEnvironmentVariable()}.${API_DOMAIN}${API_ROOT}`;
}

const apiClientCreator = (dispatch) => {

  dispatch;

  const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {ClientId: ''} //client ID for application
  });
  apiClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    //handle other errors, such as network failure
    if (error.status === undefined) {
      //dispatch(displayGeneralError('error'));
      return Promise.reject(error);
    }
    const ignoreError = error.request.responseURL.split('/').indexOf('status.action') !== -1;
    if (dispatch && parseInt(error.status, 10) !== NOT_FOUND && parseInt(error.status, 10) !== '400' && !ignoreError) {
      //dispatch(displayGeneralError(error));
    }
    return Promise.reject(error);
  });
  return apiClient;
};

export default apiClientCreator;
