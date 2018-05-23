import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import RenderTextInput from 'components/Shared/TextInput/RenderTextInput';
import Modal from 'components/Shared/Modal/Modal';
import BlockButton from 'components/Shared/BlockButton/BlockButton';
import { required, email, confirmEmail } from 'utils/fieldValidation';

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
      handleSubmit, // redux
      toggleModal,
      pristine
    } = this.props;

    return (
      <Modal
        isOpen={toggleModal}
        onRequestClose={this.handleOnRequestClose}>
        <div>
          <form>
            <Field
              name="firstName"
              label="First name"
              hideLabel
              validate={fullNameValidation}
              placeholder="First name"
              type="text"
              component={RenderTextInput}
            />
            <Field
              name="email"
              label="Email"
              hideLabel
              validate={emailValidation}
              placeholder="Email"
              type="text"
              component={RenderTextInput}
            />
            <Field
              name="confirmEmail"
              label="Confirm Email"
              hideLabel
              validate={confirmEmailValidation}
              placeholder="Confirm Email"
              type="text"
              component={RenderTextInput}
            />
          </form>
          <BlockButton
            className="pull-right submit"
            primary
            loading={this.state.isPostingData}
            disabled={pristine || this.state.isPostingData}
            onClick={handleSubmit(this.submitForm)}>
            SEND INVITATIONS
          </BlockButton>
        </div>
      </Modal>
    );

  }

}

AppModal.propTypes = {
  handleSubmit: PropTypes.func,
  onRequestClose: PropTypes.func,
  toggleModal: PropTypes.bool,
  pristine: PropTypes.bool
};

const withReduxForm = reduxForm({
  form: 'invitationsForm',
  enableReinitialize: true
});

export default withReduxForm(AppModal);
