import { useRef } from 'react';
import { Formik } from 'formik';
import { stepTwoSchema } from 'helpers/validationSchemas/addNotice';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box/Box';

import { PreviewContainer, RemoveImgBtn, PreviewImg } from './Steps.styled';
import {
  BoxQuestion,
  FormWrapper,
  InputRadio,
  SexFormBox,
  SexLabel,
  MaleIconBox,
  FemaleIconBox,
  ActionButtonsWrapper,
  ActionButton,
  TextAreaInput,
  ErrorStyle,
  TextLabel,
  InputCont,
  TextInput,
  PhotoPetBtn,
  InputContTextArea,
} from '../AddNoticeModal.styled';

import { AddPhotoIcon } from 'components/ModalAddsPet/Steps/Steps.styled.jsx';

const StepTwo = props => {
  const { t } = useTranslation();

  const filePicker = useRef(null);

  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <FormWrapper>
          <SexFormBox>
            <BoxQuestion>{t('The_sex')}:</BoxQuestion>

            <SexLabel checkedSex={values.sex === 'male'}>
              <MaleIconBox />
              {t('Male')}
              <InputRadio type="radio" name="sex" value="male" />
            </SexLabel>

            <SexLabel checkedSex={values.sex === 'female'}>
              <FemaleIconBox />
              {t('Female')}
              <InputRadio type="radio" name="sex" value="female" />
            </SexLabel>
          </SexFormBox>

          <InputCont>
            <TextLabel htmlFor="location">{t('Location')}:</TextLabel>
            <TextInput name="location" placeholder={t('Type_pet_location')} />
            <ErrorStyle name="location" component="div" />
          </InputCont>

          {props.data.category === 'sell' && (
            <InputCont>
              <TextLabel htmlFor="price">{t('Price')}:</TextLabel>
              <TextInput name="price" placeholder={t('Type_pet_price')} />
              <ErrorStyle name="price" component="div" />
            </InputCont>
          )}

          <TextLabel>{t('Load_pet_image')}</TextLabel>
          <input
            hidden
            ref={filePicker}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={e => {
              const chosenImg = e.target.files[0];
              setFieldValue('photoURL', chosenImg);

              const reader = new FileReader();
              reader.onload = e => {
                setFieldValue('preview', e.target.result);
              };
              reader.readAsDataURL(chosenImg);
            }}
          />

          {values?.preview ? (
            <Box>
              <PreviewContainer>
                <RemoveImgBtn
                  type="button"
                  onClick={() => {
                    setFieldValue('photoURL', null);
                    setFieldValue('preview', null);
                  }}
                >
                  &times;
                </RemoveImgBtn>
                <PreviewImg src={values?.preview} alt="Preview" />
              </PreviewContainer>
            </Box>
          ) : (
            <PhotoPetBtn
              type="button"
              onClick={() => filePicker.current.click()}
            >
              <AddPhotoIcon width={48} height={48} />
            </PhotoPetBtn>
          )}

          <InputContTextArea>
            <TextLabel htmlFor="comments">{t('Comments')}</TextLabel>
            <TextAreaInput
              name="comments"
              // as="textarea"
              type="text"
              rows="4"
              placeholder={t('Type_comments')}
              required="Required comments"
            />
            <ErrorStyle name="comments" component="div" />
          </InputContTextArea>

          <ActionButtonsWrapper>
            <ActionButton type="button" onClick={() => props.prev(values)}>
              {t('Back')}
            </ActionButton>
            <ActionButton type="submit">{t('Done')}</ActionButton>
          </ActionButtonsWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default StepTwo;
