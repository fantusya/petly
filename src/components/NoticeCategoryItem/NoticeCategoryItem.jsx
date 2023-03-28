import moment from 'moment';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { DEFAULT_IMAGE } from 'constants/urls';
import {
  NoticesItem,
  Wrapper,
  ItemContent,
  ItemTitle,
  ItemRecords,
  Record,
  RecordName,
  RecordContent,
  NoticeButton,
  DeleteIcon,
  AddFavoriteIcon,
  RemoveFavoriteIcon,
  AddFavoriteButton,
  ConfirmWrapper,
} from './NoticeCategoryItem.styled';
import { Label, ModalButton } from 'components/commonComponents';
import NoticeModal from 'components/NoticeModal';
import Modal from 'components/Modal';
import { useAuth, useNotices } from 'hooks';
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  removeUserNotice,
} from 'redux/notices/operations';

export const NoticeCategoryItem = ({ notice }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteNotices, ownNotices } = useNotices();

  const {
    category,
    birthDate,
    location,
    title,
    photoURL,
    breed,
    owner,
    price,
    _id: id,
  } = notice;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  let categoryName = '';

  switch (category) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;
    case 'sell':
      categoryName = 'sell';
      break;

    default:
      break;
  }

  useEffect(() => {
    if (favoriteNotices.some(item => item._id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteNotices, ownNotices, id, user.favorites]);

  const notify = () =>
    toast.error('Please login or register', {
      position: 'top-center',
    });

  const handleFavorites = async id => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
    dispatch(getFavorites({}));
    return;
  };

  const [deletionConfirmation, setDeletionConfirmation] = useState(false);

  const handleDeletion = () => {
    setDeletionConfirmation(!deletionConfirmation);
  };

  return (
    <>
      <NoticesItem>
        <Box height="100%" display="flex" flexDirection="column">
          <Wrapper img={photoURL ? photoURL : DEFAULT_IMAGE}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt="12px"
              pr="12px"
            >
              <Label>{categoryName}</Label>
              <AddFavoriteButton
                onClick={() => (isLoggedIn ? handleFavorites(id) : notify())}
                isFavorite={isFavorite}
              >
                {isFavorite ? <RemoveFavoriteIcon /> : <AddFavoriteIcon />}
              </AddFavoriteButton>
            </Box>
          </Wrapper>
          <ItemContent isLogged={isLoggedIn}>
            <ItemTitle>{title}</ItemTitle>
            <Box>
              <ItemRecords isOwn={owner?.id === user._id}>
                <Record>
                  <RecordName>Breed:</RecordName>
                  <RecordContent>{breed}</RecordContent>
                </Record>
                <Record>
                  <RecordName>Place:</RecordName>
                  <RecordContent>{location}</RecordContent>
                </Record>
                <Record>
                  <RecordName>Age:</RecordName>
                  <RecordContent>
                    {birthDate
                      ? moment(birthDate, 'YYYYMMDD').fromNow(true)
                      : 'N/A'}
                  </RecordContent>
                </Record>
                {categoryName === 'sell' && (
                  <Record>
                    <RecordName>Price:</RecordName>
                    <RecordContent>{price ? price : '0'} грн</RecordContent>
                  </Record>
                )}
              </ItemRecords>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexGrow="1"
              >
                <NoticeButton
                  onClick={() => handleModalToggle()}
                  isLogged={isLoggedIn}
                >
                  Learn more
                </NoticeButton>
                {owner?.id === user._id && (
                  <ConfirmWrapper>
                    {deletionConfirmation ? (
                      <>
                        <ModalButton
                          onClick={() => {
                            handleDeletion();
                            dispatch(removeUserNotice(id));
                          }}
                        >
                          yes
                        </ModalButton>
                        <ModalButton onClick={handleDeletion}>no</ModalButton>
                      </>
                    ) : (
                      <NoticeButton
                        isLogged={isLoggedIn}
                        onClick={handleDeletion}
                      >
                        Delete <DeleteIcon />
                      </NoticeButton>
                    )}
                  </ConfirmWrapper>
                )}
              </Box>
            </Box>
          </ItemContent>
        </Box>
      </NoticesItem>
      {isModalOpen ? (
        <Modal onClose={handleModalToggle}>
          <NoticeModal
            id={id}
            label={categoryName}
            onClose={handleModalToggle}
            isFavorite={isFavorite}
            handleFavorites={handleFavorites}
            notify={notify}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default NoticeCategoryItem;
