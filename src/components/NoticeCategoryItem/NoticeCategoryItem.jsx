import moment from 'moment';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import {
  NoticesItem,
  Wrapper,
  ItemContent,
  ItemRecords,
  ItemTitle,
  Record,
  RecordName,
  RecordContent,
  NoticeButton,
  DeleteIcon,
  AddFavoriteIcon,
  AddFavoriteButton,
} from './NoticeCategoryItem.styled';
import { Label } from 'components/commonComponents';
import NoticeModal from 'components/NoticeModal';
import Modal from 'components/Modal';
import { useAuth } from 'hooks';
import {
  addToFavorites,
  removeFromFavorites,
  removeUserNotice,
} from 'redux/notices/operations';
import {
  selectFavoriteNotices,
  selectOwnNotices,
} from 'redux/notices/selectors';

export const NoticeCategoryItem = ({ data }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const ownCards = useSelector(selectOwnNotices);
  const favoriteCards = useSelector(selectFavoriteNotices);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOwn, setIsOwn] = useState(false);

  // const isLoggedIn = true;

  const {
    category,
    birthDate,
    location,
    title,
    photoURL,
    breed,
    _id: id,
  } = data;

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Category Switch
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
  //

  useEffect(() => {
    setIsFavorite(favoriteCards.some(card => card._id === id));
    setIsOwn(ownCards.some(card => card._id === id));
  }, [favoriteCards, ownCards, id]);

  const notify = () => toast('Please login or register');

  const handleFavorites = () => {
    isFavorite
      ? dispatch(removeFromFavorites(id))
      : dispatch(addToFavorites(id));
  };

  return (
    <>
      <NoticesItem>
        <Wrapper
          img={
            photoURL
              ? photoURL
              : 'https://cdn-icons-png.flaticon.com/512/2454/2454311.png'
          }
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt="12px"
            pr="12px"
          >
            <Label>{categoryName}</Label>
            <AddFavoriteButton
              onClick={isLoggedIn ? handleFavorites : notify}
              isFavorite={isFavorite}
            >
              <AddFavoriteIcon isFavorite={isFavorite ? true : null} />
            </AddFavoriteButton>
          </Box>
        </Wrapper>
        <ItemContent isLogged={isLoggedIn}>
          <ItemTitle>{title}</ItemTitle>
          <ItemRecords isOwn={isOwn}>
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
                {birthDate ? moment(birthDate, 'YYYYMMDD').fromNow() : 'N/A'}
              </RecordContent>
            </Record>
          </ItemRecords>
          <Box display="flex" flexDirection="column" alignItems="center">
            <NoticeButton
              onClick={() => handleModalToggle()}
              isLogged={isLoggedIn}
            >
              Learn more
            </NoticeButton>
            {isOwn ? (
              <NoticeButton
                isLogged={isLoggedIn}
                onClick={() => dispatch(removeUserNotice(id))}
              >
                Delete <DeleteIcon />
              </NoticeButton>
            ) : null}
          </Box>
        </ItemContent>
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
