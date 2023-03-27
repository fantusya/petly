import React from 'react';
import { useAuth } from 'hooks';
import { useState } from 'react';
import toast from 'react-hot-toast';
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
  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useAuth();

  // const navigate = useNavigate();

  const handleModalToggle = () => {
    if (isLoggedIn) {
      setOpen(true);
    } else {
      toast.error('Please log in to add your notice!');
    }
  };

  const handleButtonToggle = () => {
    setOpen(false);
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
      {/* {visibleBtn && <AddNoticeButton handleModalToggle={handleModalToggle} />} */}
      {open ? (
        <AddNoticeModal handleButtonToggle={handleButtonToggle} />
      ) : (
        <AddNoticeButton handleModalToggle={handleModalToggle} />
      )}
    </NavBox>
  );
};

export default NoticesCategoriesNav;
