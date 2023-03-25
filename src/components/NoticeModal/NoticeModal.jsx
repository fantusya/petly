import moment from 'moment';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box/Box';
import { getNoticeById } from 'api/notice';
import { useAuth } from 'hooks';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';

import {
  ModalContainer,
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

export const NoticeModal = ({
  id,
  label,
  onClose,
  isFavorite,
  handleFavorites,
  notify,
}) => {
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchNotice = async () => {
        const data = await getNoticeById(id);
        setNotice(data);
      };
      fetchNotice();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      {isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px 50px"
        >
          <p>Data is loading</p>
        </Box>
      )}
      {notice && (
        <ModalContainer>
          <CloseButtonWrapper>
            <ModalCloseButton onClick={() => onClose()}>
              <Cross />
            </ModalCloseButton>
          </CloseButtonWrapper>
          <ContentWrapper>
            <Wrapper
              img={
                notice.photoURL
                  ? notice.photoURL
                  : 'https://cdn-icons-png.flaticon.com/512/2454/2454311.png'
              }
            >
              <ModalLabel>{label}</ModalLabel>
            </Wrapper>
            <Box>
              <ModalTitle>{notice.title}</ModalTitle>
              <ModalRecords>
                <Record>
                  <RecordName>Name:</RecordName>
                  <RecordContent>
                    {notice.name ? notice.name : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Birthday:</RecordName>
                  <RecordContent>
                    {notice.birthDate
                      ? moment(notice.birthDate).format('DD.MM.YYYY')
                      : '00.00.0000'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Breed:</RecordName>
                  <RecordContent>
                    {notice.breed ? notice.breed : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Location:</RecordName>
                  <RecordContent>
                    {notice.location ? notice.location : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>The sex:</RecordName>
                  <RecordContent>
                    {notice.sex ? notice.sex : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Email:</RecordName>
                  <RecordContent>
                    {notice.owner ? (
                      <Link href={`mailto: ${notice.owner.email}`}>
                        {notice.owner.email}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Phone:</RecordName>
                  <RecordContent>
                    {notice.owner ? (
                      <Link href={`tel: ${notice.owner.phone}`}>
                        {notice.owner.phone}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </RecordContent>
                </Record>
                {isLoggedIn ? (
                  <Record>
                    <RecordName>Price:</RecordName>
                    <RecordContent>
                      ${notice.price ? notice.price : '0'}
                    </RecordContent>
                  </Record>
                ) : null}
              </ModalRecords>
            </Box>
          </ContentWrapper>
          <ModalComments>
            <CommentsBold>Comments:</CommentsBold>{' '}
            {notice.comments ? notice.comments : ''}
          </ModalComments>
          <ButtonsWrapper>
            <ContactButton href={`tel: ${notice.owner.phone}`}>
              Contact
            </ContactButton>
            <ModalFavoriteButton
              onClick={isLoggedIn ? handleFavorites(id) : notify}
            >
              {isFavorite ? 'Remove from' : 'Add to'} <AddFavoriteIcon />
            </ModalFavoriteButton>
          </ButtonsWrapper>
        </ModalContainer>
      )}
    </>
  );
};

export default NoticeModal;
