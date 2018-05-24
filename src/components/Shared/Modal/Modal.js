import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './Modal.scss';

const Modal = props => (
  <ReactModal
    {...props}
    shouldCloseOnOverlayClick={false}
    className={styles.Container}
    overlayClassName={styles.Overlay}
  >
    <div className={styles.Inner}>
      <div className={styles.Modal}>
        <div
          className={styles.Close}
          onClick={() => props.onRequestClose()}>
          &times;
        </div>
        {props.children}
      </div>
    </div>
  </ReactModal>
);

ReactModal.setAppElement('body');

Modal.propTypes = {
  children: PropTypes.object,
  contentLabel: PropTypes.string,
  onRequestClose: PropTypes.func
};

export default Modal;
