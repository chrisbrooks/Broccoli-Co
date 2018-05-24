import React, { Component } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import BlockButton from 'components/Shared/BlockButton/BlockButton';
import AppFormWithData from './AppForm/AppFormWithData';
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
        <div className={styles.InnerContainer}>
          <Header />
          <div className={styles.BannerContainer}>
            <section className={styles.Banner}>
              <h1>A better way<br /> to enjoy <span>every day.</span></h1>
              <p>Be the first to know when we launch</p>
              <BlockButton
                className={styles.Button}
                primary
                onClick={this.handleOpenModal}>
                Request an invite
              </BlockButton>
            </section>
          </div>
          <AppFormWithData
            toggleModal={this.state.toggleModal}
            onRequestClose={this.handleCloseModal} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
