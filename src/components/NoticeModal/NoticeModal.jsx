import moment from 'moment';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box/Box';
import { getNoticeById } from 'api/notice';
import { Status } from 'constants/status';
// import { useAuth } from 'hooks';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';
import { ModalButton } from 'components/commonComponents';
import { DEFAULT_IMAGE } from 'constants/urls';
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
import { toast } from 'react-hot-toast';

export const NoticeModal = ({
  id,
  label,
  onClose,
  isFavorite,
  handleFavorites,
}) => {
  const [notice, setNotice] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  // const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchNotice = async () => {
      setStatus(Status.PENDING);
      try {
        const data = await getNoticeById(id);
        setNotice(data);
        setStatus(Status.RESOLVED);
      } catch {
        setStatus(Status.REJECTED);
      }
    };

    fetchNotice();
  }, [id]);

  return (
    <>
      {status === Status.PENDING && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px 50px"
        >
          <p>Data is loading</p>
        </Box>
      )}
      {status === Status.REJECTED && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px 50px"
        >
          <p>Error...</p>
        </Box>
      )}
      {status === Status.RESOLVED && (
        <ModalContainer>
          <CloseButtonWrapper>
            <ModalCloseButton onClick={() => onClose()}>
              <Cross />
            </ModalCloseButton>
          </CloseButtonWrapper>
          <ContentWrapper>
            <Wrapper img={notice?.photoURL ? notice.photoURL : DEFAULT_IMAGE}>
              <ModalLabel>{label}</ModalLabel>
            </Wrapper>
            <Box>
              <ModalTitle>{notice?.title}</ModalTitle>
              <ModalRecords>
                <Record>
                  <RecordName>Name:</RecordName>
                  <RecordContent>
                    {notice?.name ? notice.name : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Birthday:</RecordName>
                  <RecordContent>
                    {notice?.birthDate
                      ? moment(notice.birthDate).format('DD.MM.YYYY')
                      : '00.00.0000'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Breed:</RecordName>
                  <RecordContent>
                    {notice?.breed ? notice.breed : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Location:</RecordName>
                  <RecordContent>
                    {notice?.location ? notice.location : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>The sex:</RecordName>
                  <RecordContent>
                    {notice?.sex ? notice.sex : 'N/A'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>Email:</RecordName>
                  <RecordContent>
                    {notice?.owner?.email ? (
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
                    {notice?.owner?.phone ? (
                      <Link href={`tel: ${notice.owner.phone}`}>
                        {notice.owner.phone}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </RecordContent>
                </Record>
                {label === 'sell' ? (
                  <Record>
                    <RecordName>Price:</RecordName>
                    <RecordContent>
                      {notice?.price ? notice.price : '0'} грн
                    </RecordContent>
                  </Record>
                ) : null}
              </ModalRecords>
            </Box>
          </ContentWrapper>
          <ModalComments>
            <CommentsBold>Comments:</CommentsBold>{' '}
            {notice?.comments ? notice.comments : ''}
          </ModalComments>
          <ButtonsWrapper>
            {notice?.owner ? (
              <ContactButton href={`tel: ${notice.owner.phone}`}>
                Contact
              </ContactButton>
            ) : (
              <ModalButton onClick={() => toast('No contact information')}>
                Contact
              </ModalButton>
            )}
            <ModalFavoriteButton onClick={() => handleFavorites(id)}>
              {isFavorite ? 'Remove from' : 'Add to'} <AddFavoriteIcon />
            </ModalFavoriteButton>
          </ButtonsWrapper>
        </ModalContainer>
      )}
    </>
  );
};

export default NoticeModal;
