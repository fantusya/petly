import NoticeModal from 'components/NoticeModal';
import { useState, useRef } from 'react';

import NoticeCategoryItem from '../NoticeCategoryItem';
import { NoticesCardsList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const [state, setState] = useState({
    noticeDetails: false,
    addNotice: false,
  });

  const noticeDetailsRef = useRef(null);

  const stateHandler = value => {
    setState({ ...state, [value]: !state[value] });
  };

  return (
    <>
      <NoticesCardsList>
        <NoticeCategoryItem stateHandler={stateHandler} />
        <NoticeCategoryItem stateHandler={stateHandler} />
      </NoticesCardsList>
      {state.noticeDetails ? (
        <NoticeModal
          stateHandler={stateHandler}
          noticeDetailsRef={noticeDetailsRef}
        />
      ) : null}
    </>
  );
};

export default NoticesCategoriesList;
