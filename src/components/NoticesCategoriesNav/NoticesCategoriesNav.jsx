import React from 'react';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNoticeModal from '../AddNoticeModal/AddNoticeModal';
import {
  NavBox,
  NavBtnWrapper,
  NavBtn,
  AddButton,
  NavUl,
} from './NoticesCategoriesNav.styled';
import {
  AddPetBtnCircleLink,
  AddPetBtnLink,
} from 'components/AddNoticeButton/AddNoticeButton';

export const NoticesCategoriesNav = () => {
  const [extended, setExtended] = useState(false);
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleModalToggle = () => {
    setExtended(prev => {
      return !prev;
    });
  };

  return (
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
    /* <AddButton
        onClick={e => {
          e.preventDefault();
          isLoggedIn ? handleModalToggle() : navigate('/login');
        }}
      >
        {window.innerWidth < 768 ? (
          <AddPetBtnCircleLink>Add pet</AddPetBtnCircleLink>
        ) : (
          <AddPetBtnLink>Add pet</AddPetBtnLink>
        )}
      </AddButton>
      {extended && <AddNoticeModal handleModalToggle={handleModalToggle} />} */
  );
};

export default NoticesCategoriesNav;
