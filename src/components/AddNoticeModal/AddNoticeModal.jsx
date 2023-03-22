import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers'; 
import { addOwnNotice } from 'redux/notices/operations';

import Modal from 'components/Modal';
import { ModalCloseButton } from 'components/commonComponents';
import { CloseButtonWrapper } from 'components/NoticeModal/NoticeModal.styled';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';
import {
  Container,
  Title,
  FirstForm,
  UserComment,
  InputCont,
  InputContTextArea,
  TextAreaInput,
  TextLabel,
  TextInput,
  ActionButton,
  RadioGroup,
  RadioLabel,
  RadioInput,
  RadioButton,
  DateInput,
  SexFormBox,
  BoxQuestion,
  InputRadio,
  SexLabel,
  MaleIconBox,
  FemaleIconBox,
  PhotoPetInput,
  PhotoAddContainer,
  ImageInputWrapper,
  ImageTitle,
  AddedImage,
  ActionButtonsWrapper,
} from './AddNoticeModal.styled';
import { ReactComponent as MaleIcon } from '../../images/svg/male.svg';
import { ReactComponent as FemaleIcon } from '../../images/svg/female.svg';

const validationSchema = Yup.object({
  category: Yup.string().required('Choose category'),
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Min 2 characters')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only cahracters and spaces'
    )
    .trim()
    .max(48, '48 characters max'),
  name: Yup.string()
    .trim()
    .min(2, 'Min 2 characters')
    .required('Name is required')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Must contain only cahracters and spaces'
    )
    .max(16, '16 characters max'),
  birthday: Yup.date()
    .required('Choose date of birth')
    .max(new Date(), 'Date must be in the past'),
  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Min 2 characters')
    .matches(/^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/, 'only letters')
    .trim()
    .max(24, '24 characters max'),
  location: Yup.string().required('Type the location'),
  sex: Yup.string().required('Choose sex'),
  price: Yup.string().when('category', {
    is: category => category === 'sell',
    then: Yup.string()
      .required('Set price')
      .matches(/^[0-9][0-9]*$/, 'Numbers only'),
  }),
  comments: Yup.string()
    .trim()
    .required('Type comments')
    .min(8, 'Min 8 characters')
    .max(120, '120 characters max'),
});

const AddNoticeModal = ({ handleModalToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFirstRegStep, setIsFirstRegStep] = useState(true);
  const [image, setImage] = useState(null);

  const { pathname } = useLocation();
  
  const moveNextRegStep = () => {
    isFirstRegStep
      ? setIsFirstRegStep(false)
      : setIsFirstRegStep(true);
  };

  const categoryByDefault = () => {
    const enterPoint = pathname.split('/').pop();
    return enterPoint === 'notices' ? 'sell' : enterPoint;
  };

  const formik = useFormik({
    initialValues: {
      category: categoryByDefault(),
      title: '',
      name: '',
      birthday: '',
      breed: '',
      sex: '',
      location: '',
      price: 1,
      photoURL: null,
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const data = new FormData();
      data.append('category', values.category);
      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthday', values.birthday);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
      data.append('location', values.location);
      data.append('price', values.price);
      data.append('comments', values.comments);
      data.append('photoURL', values.photoURL);
      dispatch(addOwnNotice(data));
      handleModalToggle();
      navigate('/notices/own');
      toast.success(`Your pet ${values.name} has been added to notices`);
    },
  });

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('photoURL', files[0]);
    }
  };

//   useEffect(() => {
//     const escClose = handleEscClick(handleModalToggle);
//     return () => escClose();
//   }, [handleModalToggle]);

    //e => handleBackdropClick(e, handleModalToggle)

  return (
    <Modal onClick={handleModalToggle}> 
      <Container>
        <CloseButtonWrapper>
          <ModalCloseButton onClick={handleModalToggle} >
            <Cross />
          </ModalCloseButton>
        </CloseButtonWrapper>
        
        <Title>Add pet</Title>
        <form
          encType="multipart/form-data"
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {isFirstRegStep && (
            <FirstForm>
              <UserComment>
              You can add a pet for others to buy or take it into good hands.
              </UserComment>
              <RadioGroup onChange={formik.handleChange} required>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'lost-found' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="lost/found"
                    id="lost/found"
                  />
                  <RadioButton>lost/found</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'for-free' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="in good hands"
                    id="in good hands"
                  />
                  <RadioButton>in good hands</RadioButton>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    defaultChecked={
                      formik.values.category === 'sell' ? true : false
                    }
                    type="radio"
                    name="category"
                    value="sell"
                    id="sell"
                  />
                  <RadioButton>sell</RadioButton>
                </RadioLabel>
              </RadioGroup>
              <InputCont>
                <TextLabel>
                  Title of ad
                  <TextInput
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    name="title"
                    placeholder="Type name"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Name pet
                  <TextInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    placeholder="Type name pet"
                    required
                    minLength="2"
                    maxLength="48"
                    title="Length of title should be 2-16 letters"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Date of birth
                  <DateInput
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    name="birthday"
                    type="date"
                    placeholder="Type date of birth"
                    required
                    pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                    title="Birthday should be in format dd.mm.yyyy"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                <TextLabel>
                  Breed
                  <TextInput
                    value={formik.values.breed}
                    onChange={formik.handleChange}
                    name="breed"
                    placeholder="Type breed"
                    required
                    minLength="2"
                    maxLength="24"
                  />
                </TextLabel>
              </InputCont>
            </FirstForm>
          )}
          {!isFirstRegStep && (
            <>
              <SexFormBox>
                <BoxQuestion>
                  The sex:
                </BoxQuestion>

                <InputRadio
                  id="malePet"
                  name="sex"
                  type="radio"
                  value="male"
                  checked={formik.values.sex === 'male'}
                  onChange={formik.handleChange}
                />
                <SexLabel htmlFor="malePet">
                  <MaleIconBox>
                    <MaleIcon/>                
                  </MaleIconBox>
                   Male
                </SexLabel>

                <InputRadio
                  id="femalePet"
                  name="sex"
                  type="radio"
                  value="female"
                  checked={formik.values.sex === 'female'}
                  onChange={formik.handleChange}
                />
                <SexLabel htmlFor="femalePet">
                  <FemaleIconBox>
                    <FemaleIcon/>                
                  </FemaleIconBox>
                  Female
                </SexLabel>

              </SexFormBox>
              <InputCont>
                <TextLabel htmlFor="locationPet">
                  Location:
                  {formik.values.location !== '' && formik.errors.location ? (
                    <p>{formik.errors.location}</p>
                  ) : null}
                  <TextInput
                    value={formik.values.location}
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="Type Location (City, Region)"
                  />
                </TextLabel>
              </InputCont>
              <InputCont>
                {formik.values.category === 'sell' && (
                  <TextLabel htmlFor="pricePet">
                    Price:
                    {formik.values.price !== '' && formik.errors.price ? (
                      <p>{formik.errors.price}</p>
                    ) : null}
                    <TextInput
                      id="pricePet"
                      name="price"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      placeholder="Type price"
                    />
                  </TextLabel>
                )}
              </InputCont>

              <ImageInputWrapper>
                <ImageTitle>Load the pet's image:</ImageTitle>
                {formik.values.photoURL === null ? (
                  <PhotoAddContainer htmlFor="imagePet">
                    <svg
                      width="48"
                      height="48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5 49.166V25.5m0 0V1.833m0 23.667h23.667m-23.667 0H1.834"
                        stroke="#111"
                        strokeOpacity=".6"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <PhotoPetInput
                      id="imagePet"
                      name="photoURL"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={e => {
                        formik.handleChange(e);
                        onImageChange(e);
                      }}
                    />
                  </PhotoAddContainer>
                ) : (
                  <AddedImage>
                    <img alt="pet" src={image} />
                  </AddedImage>
                )}
              </ImageInputWrapper>
              <InputContTextArea>
                <TextLabel htmlFor="commentsAd">
                  Comments
                  {formik.values.comments !== '' && formik.errors.comments ? (
                    <p>{formik.errors.comments}</p>
                  ) : null}
                </TextLabel>
                <TextAreaInput
                  id="commentsAd"
                  name="comments"
                  type="text"
                  maxLength="120"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.comments}
                />
              </InputContTextArea>
            </>
          )}

          <ActionButtonsWrapper>
            {isFirstRegStep ? (
              <ActionButton onClick={handleModalToggle}>Cancel</ActionButton>
            ) : (
              <ActionButton onClick={moveNextRegStep}>Back</ActionButton>
            )}
            {isFirstRegStep ? (
              <ActionButton onClick={moveNextRegStep}> Next</ActionButton>
            ) : (
              <ActionButton type="submit">Done</ActionButton>
            )}
          </ActionButtonsWrapper>
        </form>
      </Container>
    </Modal>
  );
};

export default AddNoticeModal;

