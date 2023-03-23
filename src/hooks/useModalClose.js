import { useEffect } from 'react';

export const useModalClose = (ref, handler) => {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    const handleEscape = event => {
      if (event.key === 'Escape') {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [ref, handler]);
};
