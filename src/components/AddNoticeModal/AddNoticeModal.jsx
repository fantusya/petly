import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { addUserNotice } from 'api/notice';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';

import Modal from 'components/Modal';
import { ModalCloseButton } from 'components/commonComponents';
import { CloseButtonWrapper } from 'components/NoticeModal/NoticeModal.styled';
import { ReactComponent as Cross } from 'images/svg/cross.svg';

import { Container, Title } from './AddNoticeModal.styled';

const AddNoticeModal = ({ handleButtonToggle }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.split('/').reverse()[0];

  const [showModal, setShowModal] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const [data, setData] = useState({
    category: 'sell',
    title: '',
    name: '',
    birthDate: '',
    breed: '',
    sex: 'male',
    location: '',
    price: '',
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
      formData.append('category', newData.category);
      formData.append('title', newData.title);
      formData.append('name', newData.name);
      formData.append('birthDate', formattedDate);
      formData.append('breed', newData.breed);
      formData.append('sex', newData.sex);
      formData.append('location', newData.location);
      formData.append('comments', newData.comments);
      formData.append('photoURL', newData.photoURL);
      if (newData.price) {
        formData.append('price', newData.price);
      } else {
        formData.append('price', 0.01);
      }

      const res = await addUserNotice(formData);

      if (res.status === 201) {
        navigate('/notices/own');
        if (currentPage === 'own') {
          window.location.reload();
        }
      } else {
        toast.error(i18n.t('Try_again'));
      }

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
        <Container>
          <CloseButtonWrapper>
            <ModalCloseButton onClick={handleModalToggle}>
              <Cross />
            </ModalCloseButton>
          </CloseButtonWrapper>

          <Title>{t('Add_pet')}</Title>
          {steps[currentStep]}
        </Container>
      </Modal>
    )
  );
};

export default AddNoticeModal;
