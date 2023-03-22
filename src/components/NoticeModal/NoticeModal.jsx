import { useRef } from 'react';
import { Box } from 'components/Box/Box';

import { useModalClose } from 'hooks/useModalClose';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';

import {
  ModalContainer,
  Backdrop,
  ModalTitle,
  ModalRecords,
  Record,
  Wrapper,
  ContentWrapper,
  AddFavoriteIcon,
  ModalLabel,
  ModalFavoriteButton,
  ButtonsWrapper,
  ModalComments,
  CommentsBold,
  Link,
  CloseButtonWrapper,
  RecordName,
  RecordContent,
  ContactButton,
} from './NoticeModal.styled';

import { ModalCloseButton } from 'components/commonComponents';

export const NoticeModal = ({ stateHandler }) => {
  const noticeDetailsRef = useRef(null);

  useModalClose(noticeDetailsRef, () => stateHandler('noticeDetails'));

  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';
  return (
    <Backdrop>
      <ModalContainer ref={noticeDetailsRef}>
        <CloseButtonWrapper>
          <ModalCloseButton onClick={() => stateHandler('noticeDetails')}>
            <Cross />
          </ModalCloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <Wrapper img={imagePath}>
            <ModalLabel>Sell</ModalLabel>
          </Wrapper>
          <Box>
            <ModalTitle>
              Cute dog looking for a home bnmbmb nbmbmnbmb mnb
            </ModalTitle>
            <ModalRecords>
              <Record>
                <RecordName>Name:</RecordName>
                <RecordContent>1234567890123456</RecordContent>
              </Record>
              <Record>
                <RecordName>Birthday:</RecordName>
                <RecordContent>Birthday</RecordContent>
              </Record>
              <Record>
                <RecordName>Breed:</RecordName>
                <RecordContent>Pomeranian dog dog doggg</RecordContent>
              </Record>
              <Record>
                <RecordName>Location:</RecordName>
                <RecordContent>Lviv</RecordContent>
              </Record>
              <Record>
                <RecordName>The sex:</RecordName>
                <RecordContent>male</RecordContent>
              </Record>
              <Record>
                <RecordName>Email:</RecordName>
                <RecordContent>
                  <Link href="mailto: user@somelongname111111">
                    {/* <EllipsisText
                      text={'user@somelongname111111'}
                      length={18}
                    /> */}
                    user@somelongname111111
                  </Link>
                </RecordContent>
              </Record>
              <Record>
                <RecordName>Phone:</RecordName>
                <RecordContent>
                  <Link href="tel: +0634477382">+0634477382</Link>
                </RecordContent>
              </Record>
              <Record>
                <RecordName>Price:</RecordName>
                <RecordContent>$150</RecordContent>
              </Record>
            </ModalRecords>
          </Box>
        </ContentWrapper>
        <ModalComments>
          <CommentsBold>Comments:</CommentsBold> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Minus laudantium vero esse.
        </ModalComments>
        <ButtonsWrapper>
          <ContactButton href="tel: +0634477382">Contact</ContactButton>
          <ModalFavoriteButton>
            Add to <AddFavoriteIcon />
          </ModalFavoriteButton>
        </ButtonsWrapper>
      </ModalContainer>
    </Backdrop>
  );
};

export default NoticeModal;
