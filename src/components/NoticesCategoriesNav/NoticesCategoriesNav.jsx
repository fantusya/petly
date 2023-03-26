import React from 'react';
import { useAuth } from 'hooks';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import AddNoticeModal from '../AddNoticeModal/AddNoticeModal';
import {
  NavBox,
  // NavBtnWrapper,
  NavBtn,
  // AddButton,
  NavUl,
} from './NoticesCategoriesNav.styled';
import AddNoticeButton from 'components/AddNoticeButton';

export const NoticesCategoriesNav = () => {
  const [extended, setExtended] = useState(false);
  const { isLoggedIn } = useAuth();

  // const navigate = useNavigate();

  const handleModalToggle = () => {
    setExtended(prev => {
      return !prev;
    });
  };

  return (
    <NavBox>
      <NavUl>
        <li>
          <NavBtn to="sell">sell</NavBtn>
        </li>
        <li>
          {' '}
          <NavBtn to="lost-found">lost/found</NavBtn>
        </li>
        <li>
          <NavBtn to="for-free">in good hands</NavBtn>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavBtn to="favorite">favorite ads</NavBtn>
            </li>
            <li>
              <NavBtn to="own">my ads</NavBtn>
            </li>
          </>
        )}
      </NavUl>
      <AddNoticeButton
                onClick={e => {
                  e.preventDefault();
                   handleModalToggle();
                }}
        // onClick={e => {
        //   // e.preventDefault();
        //   isLoggedIn ? handleModalToggle() : navigate('/login');
        // }}
      />
      {extended && <AddNoticeModal handleModalToggle={handleModalToggle} />}
    </NavBox>
  );
};

export default NoticesCategoriesNav;
