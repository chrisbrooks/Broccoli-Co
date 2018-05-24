import reducer from '../appForm.reducers';
import * as ACTIONS from '../appForm.actionTypes';

describe('test reducers', () => {

  const initialState = {
    signUpSuccess: false,
    signUpError: null
  };

  it('should handle SIGNUP_SUCCESS', () => {

    expect(reducer(initialState, {
      type: ACTIONS.SIGNUP_SUCCESS,
      payload: true
    })).toEqual({
      ...initialState,
      signUpSuccess: true
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    const payload = {
      signUpSuccess: false,
      signUpError: 'Sorry error occured'
    };
    expect(reducer(initialState, {
      type: ACTIONS.SIGNUP_FAILURE,
      payload
    })).toEqual({
      ...initialState,
      signUpSuccess: payload.signUpSuccess,
      signUpError: payload.signUpError
    });
  });

  it('should return the default state', () => {

    const state = { ...initialState };
    expect(reducer((state), {})).toEqual(initialState);

  });
});
