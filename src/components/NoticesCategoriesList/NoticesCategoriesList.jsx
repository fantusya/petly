import Modal from 'components/Modal/Modal';
import NoticeCategoryItem from '../NoticeCategoryItem';
import NoticeModal from 'components/NoticeModal';
import { NoticesCardsList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ stateHandler, isModalOpen }) => {
  return (
    <>
      <NoticesCardsList>
        <NoticeCategoryItem stateHandler={stateHandler} />
        <NoticeCategoryItem stateHandler={stateHandler} />
      </NoticesCardsList>
      {isModalOpen.noticeDetails ? (
        <Modal>
          <NoticeModal stateHandler={stateHandler} />
        </Modal>
      ) : null}
    </>
  );
};

export default NoticesCategoriesList;
