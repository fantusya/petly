import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// import { addOwnNotice } from 'redux/notices/operations';

import Modal from 'components/Modal';
import { ModalCloseButton } from 'components/commonComponents';
import { CloseButtonWrapper } from 'components/NoticeModal/NoticeModal.styled';
import { ReactComponent as Cross } from '../../images/svg/cross.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

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
import { addUserNotice } from 'api/notice';

const validationSchema = Yup.object({
  category: Yup.string().required(i18n.t('Choose_category')),
  title: Yup.string()
    .required(i18n.t('Title_is_required'))
    .min(2, i18n.t('Min_char'))
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      i18n.t('Must_contain_char')
    )
    .trim()
    .max(48, i18n.t('Char_max')),
  name: Yup.string()
    .trim()
    .min(2, i18n.t('Min_char'))
    .required(i18n.t('Name_required'))
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      i18n.t('Must_contain_char')
    )
    .max(16, i18n.t('Sixteen_char_max')),
  birthDate: Yup.date()
    .required(i18n.t('Choose_date_birth'))
    .max(new Date(), i18n.t('Date_past')),
  breed: Yup.string()
    .required(i18n.t('Breed_required'))
    .min(2, i18n.t('Min_char'))
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      i18n.t('Only_letters')
    )
    .trim()
    .max(24, i18n.t('Tw_char_max')),
  location: Yup.string().required(i18n.t('Type_location')),
  sex: Yup.string().required(i18n.t('Choose_sex')),
  price: Yup.string()
    .required(i18n.t('Set_price'))
    .matches(/^[0-9][0-9]*$/, i18n.t('Numbers_only')),
  comments: Yup.string()
    .trim()
    .required(i18n.t('Type_comments'))
    .min(8, i18n.t('Eight_char_min'))
    .max(120, i18n.t('Oh_char_max')),
});

const AddNoticeModal = ({ handleButtonToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(true);
  const [isFirstRegStep, setIsFirstRegStep] = useState(true);
  const [image, setImage] = useState(null);

  // const { pathname } = useLocation();

  const moveNextRegStep = () => {
    isFirstRegStep ? setIsFirstRegStep(false) : setIsFirstRegStep(true);
  };

  // const categoryByDefault = () => {
  //   const enterPoint = pathname.split('/').pop();

  //   return enterPoint === 'notices' ? 'sell' : enterPoint;
  // };

  const formik = useFormik({
    initialValues: {
      category: 'sell',
      title: '',
      name: '',
      birthDate: '',
      breed: '',
      sex: 'male',
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
      data.append('birthDate', values.birthDate);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
      data.append('location', values.location);
      data.append('price', values.price);
      data.append('comments', values.comments);
      data.append('photoURL', values.photoURL);
      dispatch(addUserNotice(data));
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

          <Title>{t('Add_pet')}</Title>
          <form
            encType="multipart/form-data"
            onSubmit={e => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            {isFirstRegStep && (
              <FirstForm>
                <UserComment>{t('You_can_add_pet')}</UserComment>

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
                    <RadioButton>{t('lost_found')}</RadioButton>
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
                    <RadioButton>{t('in_good_hands')}</RadioButton>
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
                    <RadioButton>{t('sell')}</RadioButton>
                  </RadioLabel>
                </RadioGroup>

                <InputCont>
                  <TextLabel>
                    {t('Title_of_ad')}
                    <TextInput
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      name="title"
                      placeholder={t('Type_name')}
                      required
                      minLength="2"
                      maxLength="48"
                      title={t('Length_title')}
                    />
                  </TextLabel>
                </InputCont>
                <InputCont>
                  <TextLabel>
                    {t('Name_pet')}
                    <TextInput
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name"
                      placeholder={t('Type_name_pet')}
                      required
                      minLength="2"
                      maxLength="48"
                      title={t('Length_name')}
                    />
                  </TextLabel>
                </InputCont>
                <InputCont>
                  <TextLabel>
                    {t('Date_of_birth')}
                    <DateInput
                      value={formik.values.birthDate}
                      onChange={formik.handleChange}
                      name="birthDate"
                      type="date"
                      placeholder={t('Type_date_of_birth')}
                      required
                      pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                      title={t('birthDate_format')}
                    />
                  </TextLabel>
                </InputCont>
                <InputCont>
                  <TextLabel>
                    {t('Breed')}
                    <TextInput
                      value={formik.values.breed}
                      onChange={formik.handleChange}
                      name="breed"
                      placeholder={t('Type_breed')}
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
                  <BoxQuestion>{t('The_sex')}:</BoxQuestion>

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
                      <MaleIcon />
                    </MaleIconBox>
                    {t('Male')}
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
                      <FemaleIcon />
                    </FemaleIconBox>
                    {t('Female')}
                  </SexLabel>
                </SexFormBox>
                <InputCont>
                  <TextLabel htmlFor="locationPet">
                    {t('Location')}:
                    {formik.values.location !== '' && formik.errors.location ? (
                      <p>{formik.errors.location}</p>
                    ) : null}
                    <TextInput
                      value={formik.values.location}
                      id="location"
                      name="location"
                      type="text"
                      onChange={formik.handleChange}
                      placeholder={t('Type_Location')}
                    />
                  </TextLabel>
                </InputCont>
                <InputCont>
                  {formik.values.category === 'sell' && (
                    <TextLabel htmlFor="pricePet">
                      {t('Price')}:
                      {formik.values.price !== '' && formik.errors.price ? (
                        <p>{formik.errors.price}</p>
                      ) : null}
                      <TextInput
                        id="pricePet"
                        name="price"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder={t('Type_price')}
                      />
                    </TextLabel>
                  )}
                </InputCont>

                <ImageInputWrapper>
                  <ImageTitle>{t('Load_img')}:</ImageTitle>
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
                    {t('Comments')}
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
                <ActionButton onClick={handleModalToggle}>
                  {t('Cancel')}
                </ActionButton>
              ) : (
                <ActionButton onClick={moveNextRegStep}>
                  {t('Back')}
                </ActionButton>
              )}
              {isFirstRegStep ? (
                <ActionButton onClick={moveNextRegStep}>
                  {t('Next')}
                </ActionButton>
              ) : (
                <ActionButton type="submit">{t('Done')}</ActionButton>
              )}
            </ActionButtonsWrapper>
          </form>
        </Container>
      </Modal>
    )
  );
};

export default AddNoticeModal;
