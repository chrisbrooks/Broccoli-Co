import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './renderTextInput.scss';

const renderTextInput = ({
  input,
  className,
  placeholder,
  label,
  hideLabel,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div
    className={cx('p-rel', className, {
      'has-error': touched && error
    })}>
    <label className={hideLabel ? styles.HideLabel : ''}>{label}</label>
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
  guide: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  meta: PropTypes.object,
  overrideTouched: PropTypes.bool,
  hideLabel: PropTypes.bool
};

export default renderTextInput;
