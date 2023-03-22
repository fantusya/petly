import { useState } from 'react';

import NoticeCategoryItem from '../NoticeCategoryItem';
import NoticeModal from 'components/NoticeModal';
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
      <NoticesCardsList stateHandler={stateHandler}>
        <NoticeCategoryItem stateHandler={stateHandler} state={state} />
        <NoticeCategoryItem stateHandler={stateHandler} state={state} />
      </NoticesCardsList>
      {state.noticeDetails ? <NoticeModal stateHandler={stateHandler} /> : null}
    </>
  );
};

export default NoticesCategoriesList;
