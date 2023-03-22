import { useState } from 'react';

import NoticeModal from 'components/NoticeModal';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { NoticesCardsList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  // Move to NoticesPage
  const [state, setState] = useState({
    noticeDetails: false,
    addNotice: false,
  });

  const stateHandler = value => {
    setState({ ...state, [value]: !state[value] });
  };
  //
  return (
    <>
      <NoticesCardsList>
        <NoticeCategoryItem stateHandler={stateHandler} />
        <NoticeCategoryItem stateHandler={stateHandler} />
      </NoticesCardsList>
      {state.noticeDetails ? <NoticeModal stateHandler={stateHandler} /> : null}
    </>
  );
};

export default NoticesCategoriesList;
