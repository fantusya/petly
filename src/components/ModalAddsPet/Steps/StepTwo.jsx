import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { Box } from 'components/Box/Box';
import { useTranslation } from 'react-i18next';
import { validationTwo } from 'helpers/validationSchemas/validationPetSchema';
import {
  ButtonBox,
  Button,
  ErrorValidation,
  PetWrap,
  LabelText,
  PreviewContainer,
  RemoveImgBtn,
  PreviewImg,
  PetAvatarBtn,
  AddPhotoIcon,
  Label,
  TextInput,
} from './Steps.styled.jsx';

const StepTwo = props => {
  const { t } = useTranslation();

  const filePicker = useRef(null);

  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={validationTwo}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {/* <FormWrapper> */}
          <PetWrap>
            <LabelText htmlFor="photoURL">
              {t('Add_photo_comments')}
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
              ) : (
                <PetAvatarBtn
                  type="button"
                  onClick={() => filePicker.current.click()}
                >
                  <AddPhotoIcon width={48} height={48} />
                </PetAvatarBtn>
              )}
            </LabelText>
          </PetWrap>

          <Box mb={40}>
            <Label htmlFor="comments">
              {t('Comments')}
              <TextInput
                name="comments"
                // as="textarea"
                type="text"
                rows="4"
                placeholder={t('Type_comments')}
                required="Required comments"
              />
              <ErrorValidation name="comments" component="div" />
            </Label>
          </Box>

          <ButtonBox>
            <Button type="button" onClick={() => props.prev(values)}>
              {t('Back')}
            </Button>
            <Button type="submit">{t('Done')}</Button>
          </ButtonBox>
          {/* </FormWrapper> */}
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
