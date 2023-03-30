import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
// import { getUserNotices } from 'redux/notices/operations';
// import { useDispatch } from 'react-redux';

import { addUserNotice } from 'api/notice';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';

import Modal from 'components/Modal';
import { ModalCloseButton } from 'components/commonComponents';
import { CloseButtonWrapper } from 'components/NoticeModal/NoticeModal.styled';
import { ReactComponent as Cross } from 'images/svg/cross.svg';

import { Container, Title } from './AddNoticeModal.styled';

// import {
//   RemoveImgBtn,
//   PreviewContainer,
//   PreviewImg,
// } from './AddNoticeModal.styled';

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

// const AddNoticeModal = ({ handleButtonToggle }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const [showModal, setShowModal] = useState(true);
//   const [isFirstRegStep, setIsFirstRegStep] = useState(true);
//   const [image, setImage] = useState(null);

//   // const { pathname } = useLocation();

//   const moveNextRegStep = () => {
//     isFirstRegStep ? setIsFirstRegStep(false) : setIsFirstRegStep(true);
//   };

//   // const categoryByDefault = () => {
//   //   const enterPoint = pathname.split('/').pop();

//   //   return enterPoint === 'notices' ? 'sell' : enterPoint;
//   // };

//   const formik = useFormik({
//     initialValues: {
//       category: 'sell',
//       title: '',
//       name: '',
//       birthDate: '',
//       breed: '',
//       sex: 'male',
//       location: '',
//       price: 1,
//       photoURL: null,
//       comments: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: values => {
//       const data = new FormData();
//       data.append('category', values.category);
//       data.append('title', values.title);
//       data.append('name', values.name);
//       data.append('birthDate', values.birthDate);
//       data.append('breed', values.breed);
//       data.append('sex', values.sex);
//       data.append('location', values.location);
//       data.append('price', values.price);
//       data.append('comments', values.comments);
//       data.append('photoURL', values.photoURL);
//       dispatch(addUserNotice(data));
//       handleModalToggle();
//       navigate('/notices/own');
//       toast.success(`Your pet ${values.name} has been added to notices`);
//     },
//   });

//   const onImageChange = e => {
//     const { files } = e.currentTarget;
//     if (files) {
//       setImage(URL.createObjectURL(files[0]));
//       formik.setFieldValue('photoURL', files[0]);
//     }
//   };

//   const handleModalToggle = () => {
//     setShowModal(!showModal);
//     handleButtonToggle();
//     // setSelectedFile(null);
//     // setPreviewImg(null);
//   };

//   return (
//     showModal && (
//       <Modal onClose={handleModalToggle}>
//         <Container>
//           <CloseButtonWrapper>
//             <ModalCloseButton onClick={handleModalToggle}>
//               <Cross />
//             </ModalCloseButton>
//           </CloseButtonWrapper>

//           <Title>{t('Add_pet')}</Title>
//           <form
//             encType="multipart/form-data"
//             onSubmit={e => {
//               e.preventDefault();
//               formik.handleSubmit();
//             }}
//           >
//             {isFirstRegStep && (
//               <FirstForm>
//                 <UserComment>{t('You_can_add_pet')}</UserComment>

//                 <RadioGroup onChange={formik.handleChange} required>
//                   <RadioLabel>
//                     <RadioInput
//                       defaultChecked={
//                         formik.values.category === 'lost-found' ? true : false
//                       }
//                       type="radio"
//                       name="category"
//                       value="lost/found"
//                       id="lost/found"
//                     />
//                     <RadioButton>{t('lost_found')}</RadioButton>
//                   </RadioLabel>
//                   <RadioLabel>
//                     <RadioInput
//                       defaultChecked={
//                         formik.values.category === 'for-free' ? true : false
//                       }
//                       type="radio"
//                       name="category"
//                       value="for-free"
//                       id="for-free"
//                     />
//                     <RadioButton>{t('in_good_hands')}</RadioButton>
//                   </RadioLabel>
//                   <RadioLabel>
//                     <RadioInput
//                       defaultChecked={
//                         formik.values.category === 'sell' ? true : false
//                       }
//                       type="radio"
//                       name="category"
//                       value="sell"
//                       id="sell"
//                     />
//                     <RadioButton>{t('sell')}</RadioButton>
//                   </RadioLabel>
//                 </RadioGroup>

//                 <InputCont>
//                   <TextLabel>
//                     {t('Title_of_ad')}
//                     <TextInput
//                       value={formik.values.title}
//                       onChange={formik.handleChange}
//                       name="title"
//                       placeholder={t('Type_name')}
//                       required
//                       minLength="2"
//                       maxLength="48"
//                       title={t('Length_title')}
//                     />
//                   </TextLabel>
//                 </InputCont>
//                 <InputCont>
//                   <TextLabel>
//                     {t('Name_pet')}
//                     <TextInput
//                       value={formik.values.name}
//                       onChange={formik.handleChange}
//                       name="name"
//                       placeholder={t('Type_name_pet')}
//                       required
//                       minLength="2"
//                       maxLength="48"
//                       title={t('Length_name')}
//                     />
//                   </TextLabel>
//                 </InputCont>
//                 <InputCont>
//                   <TextLabel>
//                     {t('Date_of_birth')}
//                     <DateInput
//                       value={formik.values.birthDate}
//                       onChange={formik.handleChange}
//                       name="birthDate"
//                       type="date"
//                       placeholder={t('Type_date_of_birth')}
//                       required
//                       pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
//                       title={t('birthDate_format')}
//                     />
//                   </TextLabel>
//                 </InputCont>
//                 <InputCont>
//                   <TextLabel>
//                     {t('Breed')}
//                     <TextInput
//                       value={formik.values.breed}
//                       onChange={formik.handleChange}
//                       name="breed"
//                       placeholder={t('Type_breed')}
//                       required
//                       minLength="2"
//                       maxLength="24"
//                     />
//                   </TextLabel>
//                 </InputCont>
//               </FirstForm>
//             )}

//             {!isFirstRegStep && (
//               <>
//                 <SexFormBox>
//                   <BoxQuestion>{t('The_sex')}:</BoxQuestion>

//                   <InputRadio
//                     id="malePet"
//                     name="sex"
//                     type="radio"
//                     value="male"
//                     checked={formik.values.sex === 'male'}
//                     onChange={formik.handleChange}
//                   />
//                   <SexLabel htmlFor="malePet">
//                     <MaleIconBox>
//                       <MaleIcon />
//                     </MaleIconBox>
//                     {t('Male')}
//                   </SexLabel>

//                   <InputRadio
//                     id="femalePet"
//                     name="sex"
//                     type="radio"
//                     value="female"
//                     checked={formik.values.sex === 'female'}
//                     onChange={formik.handleChange}
//                   />
//                   <SexLabel htmlFor="femalePet">
//                     <FemaleIconBox>
//                       <FemaleIcon />
//                     </FemaleIconBox>
//                     {t('Female')}
//                   </SexLabel>
//                 </SexFormBox>
//                 <InputCont>
//                   <TextLabel htmlFor="locationPet">
//                     {t('Location')}:
//                     {formik.values.location !== '' && formik.errors.location ? (
//                       <p>{formik.errors.location}</p>
//                     ) : null}
//                     <TextInput
//                       value={formik.values.location}
//                       id="location"
//                       name="location"
//                       type="text"
//                       onChange={formik.handleChange}
//                       placeholder={t('Type_Location')}
//                     />
//                   </TextLabel>
//                 </InputCont>
//                 <InputCont>
//                   {formik.values.category === 'sell' && (
//                     <TextLabel htmlFor="pricePet">
//                       {t('Price')}:
//                       {formik.values.price !== '' && formik.errors.price ? (
//                         <p>{formik.errors.price}</p>
//                       ) : null}
//                       <TextInput
//                         id="pricePet"
//                         name="price"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.price}
//                         placeholder={t('Type_price')}
//                       />
//                     </TextLabel>
//                   )}
//                 </InputCont>

//                 <ImageInputWrapper>
//                   <ImageTitle>{t('Load_img')}:</ImageTitle>
//                   {formik.values.photoURL === null ? (
//                     <PhotoAddContainer htmlFor="imagePet">
//                       <svg
//                         width="48"
//                         height="48"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M25.5 49.166V25.5m0 0V1.833m0 23.667h23.667m-23.667 0H1.834"
//                           stroke="#111"
//                           strokeOpacity=".6"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                       <PhotoPetInput
//                         id="imagePet"
//                         name="photoURL"
//                         type="file"
//                         accept=".png, .jpg, .jpeg"
//                         onChange={e => {
//                           formik.handleChange(e);
//                           onImageChange(e);
//                         }}
//                       />
//                     </PhotoAddContainer>
//                   ) : (
//                     <AddedImage>
//                       <img alt="pet" src={image} />
//                     </AddedImage>
//                   )}
//                 </ImageInputWrapper>
//                 <InputContTextArea>
//                   <TextLabel htmlFor="commentsAd">
//                     {t('Comments')}
//                     {formik.values.comments !== '' && formik.errors.comments ? (
//                       <p>{formik.errors.comments}</p>
//                     ) : null}
//                   </TextLabel>
//                   <TextAreaInput
//                     id="commentsAd"
//                     name="comments"
//                     type="text"
//                     maxLength="120"
//                     rows={5}
//                     onChange={formik.handleChange}
//                     value={formik.values.comments}
//                   />
//                 </InputContTextArea>
//               </>
//             )}

//             <ActionButtonsWrapper>
//               {isFirstRegStep ? (
//                 <ActionButton onClick={handleModalToggle}>
//                   {t('Cancel')}
//                 </ActionButton>
//               ) : (
//                 <ActionButton onClick={moveNextRegStep}>
//                   {t('Back')}
//                 </ActionButton>
//               )}
//               {isFirstRegStep ? (
//                 <ActionButton onClick={moveNextRegStep}>
//                   {t('Next')}
//                 </ActionButton>
//               ) : (
//                 <ActionButton type="submit">{t('Done')}</ActionButton>
//               )}
//             </ActionButtonsWrapper>
//           </form>
//         </Container>
//       </Modal>
//     )
//   );
// };
