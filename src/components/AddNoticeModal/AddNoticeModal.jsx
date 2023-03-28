import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import Modal from 'components/Modal';
import { ModalCloseButton } from 'components/commonComponents';
import { CloseButtonWrapper } from 'components/NoticeModal/NoticeModal.styled';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';
// import { ReactComponent as FemaleIcon } from '../../images/svg/female.svg';
// import { ReactComponent as MaleIcon } from '../../images/svg/male.svg';

import {
  ActionButton,
  ActionButtonsWrapper,
    Container,
    FormWrapper,
    Title,
    // FirstForm,
    // UserComment,
    // InputCont,
    // InputContTextArea,
    // TextAreaInput,
    // TextLabel,
    // TextInput,
    // ActionButton,
    // RadioGroup,
    // RadioLabel,
    // RadioInput,
    // RadioButton,
    // DateInput,
    // SexFormBox,
    // BoxQuestion,
    // InputRadio,
    // SexLabel,
    // MaleIconBox,
    // FemaleIconBox,
    // PhotoPetInput,
    // PhotoAddContainer,
    // ImageInputWrapper,
    // ImageTitle,
    // AddedImage,
    // ActionButtonsWrapper,
} from './AddNoticeModal.styled';
import { validationSchemaStepOne, validationSchemaStepTwo } from 'helpers/validationSchemas/NoticeValidationSchema';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
  
const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: 'male',
  location: '',
  comments: '',
  price: '',
  petImage: null,
};

function getFull(date) {
  return date < 10 ? '0' + date : date;
}

function convertDateToString(value) {
  return `${getFull(value.getDate())}.${getFull(
    value.getMonth() + 1
  )}.${value.getFullYear()}`;
}

const AddNoticeModal = ({ handleButtonToggle }) => {
//   const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  // const [addNotice, { isLoading }] = useAddNoticeMutation(); /// delete

  useEffect(() => {
    let reader,
      isCancel = false;
    if (file) {
      reader = new FileReader();
      reader.onload = e => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      reader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (reader && reader.readyState === 1) {
        reader.abort();
      }
    };
  }, [file]);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      if (!values.price && values.category === 'sell') {
        toast.error('All the fields must be filled');
        return;
      }

      const dateMDY = convertDateToString(values.birthDate);
      const categoryName = values.category;

      const data = new FormData();
      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthDate', dateMDY);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
      if (categoryName === 'sell') {
        data.append('price', values.price);
      }
      data.append('location', values.location);
      data.append('petImage', values.petImage);
      data.append('comments', values.comments);

      handleButtonToggle();
      //   await addUserNotice({ categoryName, data });
      toast.success('The ad has been added');
    //   navigate('/notices/own');
    }

    setSubmitting(false);
  };

  const stepBack = () => {
    setCurrentStep(1);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
    handleButtonToggle();
    // setSelectedFile(null);
    // setPreviewImg(null);
  };
    
  return (
    showModal && (
        <Modal onClose={handleModalToggle}>
          <Container>
            <CloseButtonWrapper>
            <ModalCloseButton onClick={handleModalToggle}>
                <Cross />
            </ModalCloseButton>
            </CloseButtonWrapper>

            <Title>Add pet</Title> 

            <Formik
                initialValues={initialValues}
                validationSchema={
                currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo
                }
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                {({
                  isSubmitting,
                  values,
                  setFieldValue,
                  touched,
                  errors,
                }) => (
                <FormWrapper>
                    {currentStep === 1 && (
                    <FirstStep value={values.category}/>       
                    )}
                    {currentStep === 2 && (
                    <SecondStep
                      value={values}
                      errors={errors}
                      touched={touched}
                      fileDataURL={fileDataURL}
                      setFieldValue={setFieldValue}
                      setFile={setFile}
                    />            
                    )}

                    <ActionButtonsWrapper>
                      {currentStep === 1 && (
                          <ActionButton name="transparent" width="100%" onClick={handleButtonToggle}>
                          Cancel
                          </ActionButton>
                      )}
                      {currentStep === 2 && (
                          <ActionButton name="transparent" width="100%" onClick={stepBack}>
                          Back
                          </ActionButton>
                      )}
                      <ActionButton
                          name="filled"
                          type="submit"
                          width="100%"
                          disabled={isSubmitting}
                      >
                          {currentStep < 2
                              ? 'Next'
                              : 'Done'}
                      </ActionButton>
                    </ActionButtonsWrapper>
                </FormWrapper>
                )}
            </Formik>
                  
          </Container>
        </Modal>        
    )  
  );
    
};

export default AddNoticeModal;
