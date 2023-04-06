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
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { ModalCloseButton } from 'components/commonComponents';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks';

export const NoticeModal = ({
  id,
  label,
  onClose,
  isFavorite,
  handleFavorites,
  notify,
}) => {
  const [notice, setNotice] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { isLoggedIn } = useAuth();

  const { t } = useTranslation();

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
          <p>{t('Data_loading')}</p>
        </Box>
      )}
      {status === Status.REJECTED && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px 50px"
        >
          <p>{t('Error')}</p>
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
                  <RecordName>{t('Name')}:</RecordName>
                  <RecordContent>
                    {notice?.name ? notice.name : ''}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('Birthday')}:</RecordName>
                  <RecordContent>
                    {notice?.birthDate
                      ? moment(notice.birthDate).format('DD.MM.YYYY')
                      : '00.00.0000'}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('Breed')}:</RecordName>
                  <RecordContent>
                    {notice?.breed ? notice.breed : ''}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('Location')}:</RecordName>
                  <RecordContent>
                    {notice?.location ? notice.location : ''}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('The_sex')}:</RecordName>
                  <RecordContent>{notice?.sex ? notice.sex : ''}</RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('Email')}:</RecordName>
                  <RecordContent>
                    {notice?.owner?.email ? (
                      <Link href={`mailto: ${notice.owner.email}`}>
                        {notice.owner.email}
                      </Link>
                    ) : (
                      ''
                    )}
                  </RecordContent>
                </Record>
                <Record>
                  <RecordName>{t('Phone')}:</RecordName>
                  <RecordContent>
                    {notice?.owner?.phone ? (
                      <Link href={`tel: ${notice.owner.phone}`}>
                        {notice.owner.phone}
                      </Link>
                    ) : (
                      ''
                    )}
                  </RecordContent>
                </Record>
                {label === 'sell' ? (
                  <Record>
                    <RecordName>{t('Price')}:</RecordName>
                    <RecordContent>
                      {notice?.price ? notice.price : '0'} грн
                    </RecordContent>
                  </Record>
                ) : null}
              </ModalRecords>
            </Box>
          </ContentWrapper>
          <ModalComments>
            <CommentsBold>{t('Comments')}:</CommentsBold>{' '}
            {notice?.comments ? notice.comments : ''}
          </ModalComments>
          <ButtonsWrapper>
            {notice?.owner ? (
              <ContactButton href={`tel: ${notice.owner.phone}`}>
                {t('Contact')}
              </ContactButton>
            ) : (
              <ModalButton
                onClick={() => toast(i18n.t('No_contact_information'))}
              >
                {t('Contact')}
              </ModalButton>
            )}
            <ModalFavoriteButton
              onClick={() => (isLoggedIn ? handleFavorites(id) : notify())}
            >
              {isFavorite ? i18n.t('Remove_from') : i18n.t('Add_to')}{' '}
              <AddFavoriteIcon />
            </ModalFavoriteButton>
          </ButtonsWrapper>
        </ModalContainer>
      )}
    </>
  );
};

export default NoticeModal;
