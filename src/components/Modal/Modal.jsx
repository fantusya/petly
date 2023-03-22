import { createPortal } from 'react-dom';

const { Backdrop, ModalWindow } = require('./Modal.styled');

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClick }) => {
  return createPortal(
    <Backdrop onClick={onClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;