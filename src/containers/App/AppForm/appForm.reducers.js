import * as ACTIONS from './appForm.actionTypes';

const initialState = {
  signUpSuccess: false,
  signUpError: null
};

const appForm = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true
      };
    case ACTIONS.SIGNUP_FAILURE:
      return {
        ...state,
        signUpSuccess: action.payload.signUpSuccess,
        signUpError: action.payload.signUpError
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

export default appForm;
