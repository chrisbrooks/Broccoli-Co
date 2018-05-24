import { connect } from 'react-redux';

import AppFormComponent from './AppForm';
import * as appFormActions from './appForm.actions';

export default connect(
  state => ({
    signUpSuccess: state.appForm.signUpSuccess,
    signUpError: state.appForm.signUpError
  }),
  dispatch => ({
    postSignUpForm: values => dispatch(appFormActions.postSignUpForm(values)),
    resetStore: () => dispatch(appFormActions.resetStore())
  })
)(AppFormComponent);
