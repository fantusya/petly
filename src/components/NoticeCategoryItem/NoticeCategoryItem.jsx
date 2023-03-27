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
} from './NoticeCategoryItem.styled';
import { Label } from 'components/commonComponents';
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
  console.log('USER', user);

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
    if (
      user.favorites.includes(id) ||
      favoriteNotices.some(item => item._id === id)
    ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteNotices, ownNotices, id, user.favorites]);

  const notify = () => toast('Please login or register');

  const handleFavorites = id => {
    if (isLoggedIn) {
      isFavorite
        ? dispatch(removeFromFavorites(id))
        : dispatch(addToFavorites(id));
      dispatch(getFavorites());
      return;
    }
    notify();
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
                onClick={() => handleFavorites(id)}
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
                {owner?.id === user._id ? (
                  <NoticeButton
                    isLogged={isLoggedIn}
                    onClick={() => dispatch(removeUserNotice(id))}
                  >
                    Delete <DeleteIcon />
                  </NoticeButton>
                ) : null}
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
