import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import RenderTextInput from 'components/Shared/TextInput/RenderTextInput';
import Modal from 'components/Shared/Modal/Modal';
import Form from 'components/Shared/Form/Form';
import BlockButton from 'components/Shared/BlockButton/BlockButton';
import { required, email, confirmEmail, minLength } from 'utils/fieldValidation';
import styles from './appForm.scss';

// validation for redux forms to use in fieldValidation
const fullNameValidation = [required('Full name'), minLength('Full name')];
const emailValidation = [required('Email'), email];
const confirmEmailValidation = [required('Email'), confirmEmail];

export class AppForm extends Component {

  constructor() {
    super();
    this.state = {
      isPostingData: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
  }

  submitForm(values) {
    this.setState({
      isPostingData: true
    });

    const userData = {
      name: values.fullName,
      email: values.email
    };

    // submitting form and triggering redux action for axios post
    return this.props.postSignUpForm(userData)
      .then((response) => {
        if (response.data === 'Registered') {
          // redux form reset
          this.props.reset();
        }
        this.setState({
          isPostingData: false
        });
      });
  }

  handleOnRequestClose() {
    // close modal and reset the props if successful submission
    if (this.props.signUpSuccess) {
      this.props.reset();
      // reset the props to before the form was submitted
      this.props.resetStore();
    }
    this.props.onRequestClose();
  }

  render() {

    const {
      handleSubmit, // redux form
      toggleModal,
      pristine, // redux form
      valid, // redux form
      signUpSuccess,
      signUpError
    } = this.props;
    // set title for successful signup or not
    const title = signUpSuccess ? <span>All done!</span> : <p>Request an <span>invite</span></p>;

    const successContent = (
      <div>
        <p className={styles.SuccessText}>
          You will be one of the first to experience<br /> Brocolli &amp; Co. when it lauches.
        </p>
        <BlockButton
          className={styles.Button}
          primary
          onClick={() => this.handleOnRequestClose()}>
          OK
        </BlockButton>
      </div>
    );

    const formContent = (
      <Form
        WithoutLabels>
        <Field
          name="fullName"
          label="Full name"
          validate={fullNameValidation}
          placeholder="Full name"
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
        { signUpError &&
          <p className={styles.Error}>{signUpError}</p>
        }
      </Form>
    );

    return (
      <Modal
        isOpen={toggleModal}
        onRequestClose={this.handleOnRequestClose}>
        <div>
          <h2 className={styles.Title}>{title}</h2>
          { signUpSuccess ? (
            successContent
          ) : (
            formContent
          )}
        </div>
      </Modal>
    );

  }

}

AppForm.propTypes = {
  handleSubmit: PropTypes.func, // redux form
  onRequestClose: PropTypes.func,
  toggleModal: PropTypes.bool,
  pristine: PropTypes.bool, // redux form
  valid: PropTypes.bool, // redux form
  postSignUpForm: PropTypes.func,
  reset: PropTypes.func, // redux form
  signUpSuccess: PropTypes.bool,
  signUpError: PropTypes.string,
  resetStore: PropTypes.func
};

const withReduxForm = reduxForm({
  form: 'signUpForm',
  enableReinitialize: true
});

export default withReduxForm(AppForm);
