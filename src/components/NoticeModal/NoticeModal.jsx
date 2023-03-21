import { Box } from 'components/Box/Box';

import { useModalClose } from 'hooks/useModalClose';

import { CloseIcon } from './NoticeModal.styled';
import { Label } from 'components/commonComponents';
import { ModalContainer, Backdrop } from './NoticeModal.styled';
import {
  ModalTitle,
  ModalRecords,
  ModalСharacteristic,
  Wrapper,
} from './NoticeModal.styled';

export const NoticeModal = ({ stateHandler, noticeDetailsRef }) => {
  useModalClose(noticeDetailsRef, () => stateHandler('noticeDetails'));

  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';
  return (
    <Backdrop>
      <ModalContainer ref={noticeDetailsRef}>
        <button onClick={() => stateHandler('noticeDetails')}>
          <CloseIcon />
        </button>
        <Wrapper img={imagePath}>
          <Box>
            <Label>Sell</Label>
          </Box>
        </Wrapper>
        <ModalTitle>Cute dog looking for a home</ModalTitle>
        <ModalRecords>
          <Box as="ul" display="inline-block" width="30%">
            <ModalСharacteristic>Breed:</ModalСharacteristic>
            <ModalСharacteristic>Place:</ModalСharacteristic>
            <ModalСharacteristic>Age:</ModalСharacteristic>
          </Box>
          <Box as="ul" display="inline-block">
            <ModalСharacteristic>Pomeranian</ModalСharacteristic>
            <ModalСharacteristic>Lviv</ModalСharacteristic>
            <ModalСharacteristic>one year</ModalСharacteristic>
          </Box>
        </ModalRecords>
        <p>
          Comments: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Minus laudantium vero esse.
        </p>
        <button>Contact</button>
        <button>Add to</button>
      </ModalContainer>
    </Backdrop>
  );
};

export default NoticeModal;
