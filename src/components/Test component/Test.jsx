import { useRef } from 'react';
import { useModalClose } from 'hooks/useModalClose';

export const Test = ({ stateHandler }) => {
  const addNoticeModal = useRef(null);

  useModalClose(addNoticeModal, () => stateHandler('addNoticeModal'));
  return (
    <div>
      <button onClick={() => stateHandler('addNoticeModal')}>Close</button>
    </div>
  );
};

export default Test;
