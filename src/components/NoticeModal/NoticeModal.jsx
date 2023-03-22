import { Box } from 'components/Box/Box';
import { useRef } from 'react';

import { useModalClose } from 'hooks/useModalClose';

import {
  ModalContainer,
  Backdrop,
  ModalTitle,
  ModalRecords,
  ModalСharacteristic,
  Wrapper,
  AddFavoriteIcon,
  ModalLabel,
  ModalFavoriteButton,
  ButtonsWrapper,
  ModalComments,
  CommentsBold,
} from './NoticeModal.styled';

import {
  ModalButton,
  CloseButton,
  CloseIcon,
} from 'components/commonComponents';

export const NoticeModal = ({ stateHandler }) => {
  const noticeDetailsRef = useRef(null);
  useModalClose(noticeDetailsRef, () => stateHandler('noticeDetails'));

  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';
  return (
    <Backdrop>
      <ModalContainer ref={noticeDetailsRef}>
        <Box display="flex" justifyContent="right">
          <CloseButton onClick={() => stateHandler('noticeDetails')}>
            <CloseIcon />
          </CloseButton>
        </Box>
        <Wrapper img={imagePath}>
          <Box>
            <ModalLabel>Sell</ModalLabel>
          </Box>
        </Wrapper>
        <ModalTitle>Cute dog looking for a home</ModalTitle>
        <ModalRecords>
          {/*я бы сменил ширину на 50 - на макете она такая, с крохотной погрешностью из-за шрифта*/}
          <Box as="ul" display="inline-block" width="40%" fontWeight="600">
            <ModalСharacteristic>Name:</ModalСharacteristic>
            <ModalСharacteristic>Birthday:</ModalСharacteristic>
            <ModalСharacteristic>Breed:</ModalСharacteristic>
            <ModalСharacteristic>Location:</ModalСharacteristic>
            <ModalСharacteristic>The sex:</ModalСharacteristic>
            <ModalСharacteristic>Email:</ModalСharacteristic>
            <ModalСharacteristic>Phone:</ModalСharacteristic>
            <ModalСharacteristic>Price:</ModalСharacteristic>
          </Box>
          <Box as="ul" display="inline-block">
            <ModalСharacteristic>Rich</ModalСharacteristic>
            <ModalСharacteristic>Birthday</ModalСharacteristic>
            <ModalСharacteristic>Pomeranian</ModalСharacteristic>
            <ModalСharacteristic>Lviv</ModalСharacteristic>
            <ModalСharacteristic>male</ModalСharacteristic>
            {/*в случае длинной почты всё ломается - можно добавить css-свойство text-overflow: ellipsis на
         контейнер (проверить) - оно будет сокращать до "ХХХ..." всё, что не вместилось*/}
            <ModalСharacteristic>user@somelongname111111</ModalСharacteristic>
            <ModalСharacteristic>+0634477382</ModalСharacteristic>
            <ModalСharacteristic>$150</ModalСharacteristic>
          </Box>
        </ModalRecords>
        <ModalComments>
          <CommentsBold>Comments:</CommentsBold> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Minus laudantium vero esse.
        </ModalComments>
        <ButtonsWrapper>
          <ModalButton>Contact</ModalButton>
          <ModalFavoriteButton>
            Add to <AddFavoriteIcon />
          </ModalFavoriteButton>
        </ButtonsWrapper>
      </ModalContainer>
    </Backdrop>
  );
};

export default NoticeModal;
