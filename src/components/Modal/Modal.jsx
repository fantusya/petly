import { createPortal } from 'react-dom';

import { Backdrop } from './Modal.styled';

const Modal = ({ children }) => {
  return (
    <div>{createPortal(<Backdrop>{children}</Backdrop>, document.body)}</div>
  );
};

export default Modal;
