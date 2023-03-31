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

      // const res = await addUserNotice(formData);

      // if (res.status === 201) {
      //   navigate('/notices/own');
      //   if (currentPage === 'own') {
      //     window.location.reload();
      //   }
      // } else {
      //   toast.error(i18n.t('Try_again'));
      // }

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

// export const ModalAddsPet = ({ onCloseModal }) => {
//   const { t } = useTranslation();

//   useEffect(() => {
//     const onEscapeClose = e => {
//       if (e.code === 'Escape') onCloseModal();
//     };

//     window.addEventListener('keydown', onEscapeClose);

//     return () => {
//       window.removeEventListener('keydown', onEscapeClose);
//     };
//   }, [onCloseModal]);

//   const onBackdropClose = e => {
//     if (e.currentTarget === e.target) onCloseModal();
//   };

//   return (
//     <Backdrop onClick={onBackdropClose}>
//       <Modal>
//         <Title>{t('Add_pet')}</Title>
//         <ButtonClose type="button" onClick={onCloseModal}>
//           <ModalCloseIcon width={28} height={28} />
//         </ButtonClose>

//         <PetForm closeModal={onCloseModal} />
//       </Modal>
//     </Backdrop>
//   );
// };

// export default ModalAddsPet;
