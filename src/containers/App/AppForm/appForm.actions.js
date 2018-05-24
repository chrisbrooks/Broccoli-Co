import axios from 'axios';

import * as ACTIONS from './appForm.actionTypes';

export const apiEndPoint = `${process.env.API_END_POINT}/prod/fake-auth`;

export function postSignUpForm(userData) {
  return dispatch => (
    axios.post(apiEndPoint, userData)
      .then(() => {
        dispatch({
          type: ACTIONS.SIGNUP_SUCCESS,
          payload: true
        });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SIGNUP_FAILURE,
          payload: {
            signUpSuccess: false,
            signUpError: error.response.data.errorMessage
          }
        });
        return error;
      })
  );
}
