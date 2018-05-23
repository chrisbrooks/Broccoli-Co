import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './renderTextInput.scss';

const renderTextInput = ({
  input,
  className,
  placeholder,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div
    className={cx(className, styles.Container, {
      'has-error': touched && error
    })}>
    <label>{label}</label>
    <input
      type={type}
      {...input}
      placeholder={placeholder} />
    {
      touched && (error && <div className={styles.ErrorMessage}>{error}</div>)
    }
  </div>
);

renderTextInput.propTypes = {
  input: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default renderTextInput;
