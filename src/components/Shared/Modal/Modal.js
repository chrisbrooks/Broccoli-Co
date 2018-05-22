/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './Modal.scss';

const Modal = props => (
  <ReactModal
    {...props}
    shouldCloseOnOverlayClick={false}
    closeTimeoutMS={300}
    className={styles.Container}
    overlayClassName={styles.Overlay}
  >
    <div className={styles.Inner}>
      <div className={styles.Modal}>
        <div
          onClick={() => props.onRequestClose()}>
          x
        </div>
        {props.children}
      </div>
    </div>
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.array,
  contentLabel: PropTypes.string,
  onRequestClose: PropTypes.func
};

export default Modal;