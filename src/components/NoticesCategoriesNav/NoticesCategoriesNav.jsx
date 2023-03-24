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
} from './NoticesCategoriesNav.styled';
import { AddPetBtnCircleLink, AddPetBtnLink } from 'components/AddNoticeButton/AddNoticeButton';

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
    <NavBox>
      <NavBtnWrapper>
        <NavBtn to="sell">sell</NavBtn>
        <NavBtn to="lost-found">lost/found</NavBtn>
        <NavBtn to="for-free">in good hands</NavBtn>
        {isLoggedIn && (
          <>
            <NavBtn to="favorite">favorite ads</NavBtn>
            <NavBtn to="own">my ads</NavBtn>
          </>
        )}
      </NavBtnWrapper>

      <AddButton
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
      {extended && <AddNoticeModal handleModalToggle={handleModalToggle} />}


    </NavBox>
  );
};

export default NoticesCategoriesNav;
