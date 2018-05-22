import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import styles from './app.scss';

export class App extends Component {
  componentDidMount() {
    this.props.getUserLocation();
    this.props.toggleLeftSidebar(true);
  }

  render() {

    const {
      leftSidebar,
      userLocation
    } = this.props;

    console.log(userLocation);
    console.log(leftSidebar);

    return (
      <div className={styles.Container}>
        <Header />
      </div>
    );
  }
}

App.propTypes = {
  leftSidebar: PropTypes.bool,
  userLocation: PropTypes.object,
  getUserLocation: PropTypes.func,
  toggleLeftSidebar: PropTypes.func
};

export default App;
