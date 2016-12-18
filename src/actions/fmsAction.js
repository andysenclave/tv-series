//this file is just for reference, not used in the project now

import {
  FETCH_FMS_START,
  FETCH_FMS_ERROR,
  FETCH_FMS_SUCCESS
} from '../constants/actionTypes';

import apiClientCreator from '../apiClient';

const onStartReq = () => {
  return {
    type: FETCH_FMS_START
  };
};

const onSuccessReq = (response) => {
  return {
    type: FETCH_FMS_SUCCESS,
    payload: response
  };
};

const onErrorReq = (error) => {
  return {
    type: FETCH_FMS_ERROR,
    payload: error
  };
};

export function fetchFmsData() {
  return (dispatch) => {
    dispatch(onStartReq());
    const apiClient = apiClientCreator(dispatch);
    const url = 'open/texts/lifeInsuranceSettlementClient?version=pending';
    return apiClient.get(url)
      .then(response => {
        dispatch(onSuccessReq(JSON.parse(response.request.response)));
      })
      .catch(error => {
        dispatch(onErrorReq(error));
      });
  };
}
