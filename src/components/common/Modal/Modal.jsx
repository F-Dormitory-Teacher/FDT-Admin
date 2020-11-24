import React from 'react';
import './Modal.scss';

const Modal = ({ children, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-close' onClick={onClose} />
      <div className='modal-box'>{children}</div>
    </div>
  );
};

export default Modal;
