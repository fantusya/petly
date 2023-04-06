import React from 'react';
import { useAuth } from 'hooks';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import AddNoticeModal from '../AddNoticeModal/AddNoticeModal';
import { NavBox, NavBtn, NavUl } from './NoticesCategoriesNav.styled';
import AddNoticeButton from 'components/AddNoticeButton';

export const NoticesCategoriesNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const { isLoggedIn } = useAuth();

  const handleModalToggle = () => {
    if (isLoggedIn) {
      setOpen(true);
    } else {
      toast.error(i18n.t('Please_login'));
    }
  };

  const handleButtonToggle = () => {
    setOpen(false);
  };

  return (
    <NavBox>
      <NavUl>
        <li>
          <NavBtn to="sell">{t('sell')}</NavBtn>
        </li>
        <li>
          {' '}
          <NavBtn to="lost-found">{t('lost_found')}</NavBtn>
        </li>
        <li>
          <NavBtn to="for-free">{t('in_good_hands')}</NavBtn>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavBtn to="favorite">{t('favorite_ads')}</NavBtn>
            </li>
            <li>
              <NavBtn to="own">{t('my_ads')}</NavBtn>
            </li>
          </>
        )}
      </NavUl>
      {open ? (
        <AddNoticeModal handleButtonToggle={handleButtonToggle} />
      ) : (
        <AddNoticeButton handleModalToggle={handleModalToggle} />
      )}
    </NavBox>
  );
};

export default NoticesCategoriesNav;
