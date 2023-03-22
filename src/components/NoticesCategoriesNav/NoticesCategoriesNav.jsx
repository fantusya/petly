import { useAuth } from 'hooks';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  NavBox,
  NavBtnWrapper,
  NavBtn,
  FloatingAddPetBtn,
  BtnWrapper,
  AddPetText,
  AddPetBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation().pathname.split('/').pop();

  const handleAddPet = () => {
    if (!isLoggedIn) {
      toast.warn('You must login first');
      return;
    }

    navigate(`${location}/addpet`);
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
      <BtnWrapper>
        <AddPetText>Add pet</AddPetText>
        <AddPetBtn onClick={handleAddPet}>
          {/* <svg> <svg/> */}
        </AddPetBtn>
      </BtnWrapper>
      <FloatingAddPetBtn onClick={handleAddPet} type="button">
        Add pet
        {/* <svg> <svg/> */}
      </FloatingAddPetBtn>
    </NavBox>
  );
};