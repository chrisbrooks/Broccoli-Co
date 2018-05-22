import { connect } from 'react-redux';

import AppComponent from './App';
import * as appActions from './app.actions';

export default connect(
  state => ({
    leftSidebar: state.app.leftSidebar,
    userLocation: state.app.userLocation
  }),
  dispatch => ({
    toggleLeftSidebar: value => dispatch(appActions.toggleLeftSidebar(value)),
    getUserLocation: () => dispatch(appActions.getUserLocation())
  })
)(AppComponent);
