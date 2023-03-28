import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Backdrop,
  Modal,
  ButtonClose,
  ModalCloseIcon,
  Title,
} from './ModalAddsPet.styled';

import PetForm from '../PetForm/PetForm';

export const ModalAddsPet = ({ onCloseModal }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const onEscapeClose = e => {
      if (e.code === 'Escape') onCloseModal();
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [onCloseModal]);

  const onBackdropClose = e => {
    if (e.currentTarget === e.target) onCloseModal();
  };

  return (
    <Backdrop onClick={onBackdropClose}>
      <Modal>
        <Title>{t('Add_pet')}</Title>
        <ButtonClose type="button" onClick={onCloseModal}>
          <ModalCloseIcon width={28} height={28} />
        </ButtonClose>

        <PetForm closeModal={onCloseModal} />
      </Modal>
    </Backdrop>
  );
};

export default ModalAddsPet;
