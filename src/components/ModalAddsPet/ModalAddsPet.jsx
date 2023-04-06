import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from 'components/Modal';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/auth/operations';

import {
  ModalCont,
  ButtonClose,
  ModalCloseIcon,
  Title,
} from './ModalAddsPet.styled';

export const ModalAddsPet = ({ handleButtonToggle }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const [data, setData] = useState({
    name: '',
    breed: '',
    birthDate: '',
    photoURL: null,
    comments: '',
  });

  const handleNextStep = async (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      const formattedDate = new Date(
        newData.birthDate.split('.').reverse().join('-')
      );

      const formData = new FormData();
      formData.append('name', newData.name);
      formData.append('birthDate', formattedDate);
      formData.append('breed', newData.breed);
      formData.append('comments', newData.comments);
      formData.append('photoURL', newData.photoURL);

      dispatch(addPet(formData));

      handleModalToggle();

      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
    handleButtonToggle();
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      handleModalToggle={handleModalToggle}
    />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    showModal && (
      <Modal onClose={handleModalToggle}>
        <ModalCont>
          <ButtonClose type="button" onClick={handleModalToggle}>
            <ModalCloseIcon width={28} height={28} />
          </ButtonClose>
          <Title>{t('Add_pet')}</Title>
          {steps[currentStep]}
        </ModalCont>
      </Modal>
    )
  );
};

export default ModalAddsPet;
