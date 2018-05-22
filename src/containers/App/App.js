/* eslint-disable */
import React, { Component } from 'react';

import Header from 'components/Header/Header';
import AppForm from './AppForm';
import styles from './app.scss';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggleModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      toggleModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      toggleModal: false
    });
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header />
        <div onClick={this.handleOpenModal}>Toggle Modal</div>
        <AppForm
          toggleModal={this.state.toggleModal}
          onRequestClose={this.handleOpenModal} />
      </div>
    );
  }
}

export default App;
