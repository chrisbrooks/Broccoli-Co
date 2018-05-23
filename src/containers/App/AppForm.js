import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import RenderTextInput from 'components/Shared/TextInput/RenderTextInput';
import Modal from 'components/Shared/Modal/Modal';
import Form from 'components/Shared/Form/Form';
import BlockButton from 'components/Shared/BlockButton/BlockButton';
import { required, email, confirmEmail } from 'utils/fieldValidation';
import styles from './appForm.scss';

const fullNameValidation = required('Full name');
const emailValidation = [required('Email'), email];
const confirmEmailValidation = [required('Email'), confirmEmail];

export class AppModal extends Component {

  constructor() {
    super();
    this.state = {
      isPostingData: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
  }

  submitForm(values) {

    console.log(values);

    this.setState({
      isPostingData: true
    });

  }

  handleOnRequestClose() {
    this.props.onRequestClose();
  }

  render() {

    const {
      handleSubmit,
      toggleModal,
      pristine,
      valid
    } = this.props;

    return (
      <Modal
        isOpen={toggleModal}
        onRequestClose={this.handleOnRequestClose}>
        <Form
          WithoutLabels>
          <Field
            name="firstName"
            label="First name"
            validate={fullNameValidation}
            placeholder="First name"
            type="text"
            component={RenderTextInput}
          />
          <Field
            name="email"
            label="Email"
            validate={emailValidation}
            placeholder="Email"
            type="email"
            component={RenderTextInput}
          />
          <Field
            name="confirmEmail"
            label="Confirm Email"
            validate={confirmEmailValidation}
            placeholder="Confirm Email"
            type="email"
            component={RenderTextInput}
          />
          <BlockButton
            className={styles.Button}
            primary
            loading={this.state.isPostingData}
            disabled={!valid || pristine || this.state.isPostingData}
            onClick={handleSubmit(this.submitForm)}>
            SEND
          </BlockButton>
        </Form>
      </Modal>
    );

  }

}

AppModal.propTypes = {
  handleSubmit: PropTypes.func,
  onRequestClose: PropTypes.func,
  toggleModal: PropTypes.bool,
  pristine: PropTypes.bool,
  valid: PropTypes.bool
};

const withReduxForm = reduxForm({
  form: 'invitationsForm',
  enableReinitialize: true
});

export default withReduxForm(AppModal);
