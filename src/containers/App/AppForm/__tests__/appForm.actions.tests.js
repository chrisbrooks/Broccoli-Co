import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import * as actions from '../appForm.actions';
import * as ACTIONS from '../appForm.actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creator tests', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the correct actions for postSignUpForm', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'sdsdsd'
      });
    });

    const expectedActions = [
      {
        type: ACTIONS.SIGNUP_SUCCESS,
        payload: true
      }
    ];

    const store = mockStore({});
    return store.dispatch(actions.postSignUpForm()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call the correct actions for postSignUpForm', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          errorMessage: 'this is an error'
        }
      });
    });

    const expectedActions = [
      {
        type: ACTIONS.SIGNUP_FAILURE,
        payload: {
          signUpError: 'this is an error',
          signUpSuccess: false
        }
      }
    ];

    const store = mockStore({});
    return store.dispatch(actions.postSignUpForm()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return correct action for RESET', () => {
    const expectedAction = {
      type: ACTIONS.RESET
    };
    expect(actions.resetStore()).toEqual(expectedAction);
  });

});
