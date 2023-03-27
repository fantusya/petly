import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import {
  PetBox,
  PetWrap,
  Label,
  LabelText,
  Input,
  TextInput,
  ErrorValidation,
  Button,
  ButtonBox,
  AddPhotoIcon,
  HiddenInput,
  PetAvatarBtn,
} from './PetForm.styled';

import { Box } from 'components/Box/Box';

const OneStep = ({ next, closeModal }) => {
  const { t } = useTranslation();

  return (
    <>
      <PetBox>
        <Label htmlFor="name">
          {' '}
          {t('Name_pet')}
          <Input
            type="text"
            name="name"
            placeholder={t('Type_name_pet')}
            autoFocus
          />
          <ErrorValidation name="name" component="div" />
        </Label>
      </PetBox>

      <PetBox>
        <Label htmlFor="birthDate">
          {' '}
          {t('Date_of_birth')}
          <Input
            type="date"
            name="birthDate"
            placeholder={t('Type_date_of_birth')}
          />
          <ErrorValidation name="birthDate" component="div" />
        </Label>
      </PetBox>

      <Box mb={40} mt={4}>
        <Label htmlFor="breed">
          {' '}
          {t('Breed')}
          <Input type="text" name="breed" placeholder={t('Type_breed')} />
          <ErrorValidation name="breed" component="div" />
        </Label>
      </Box>

      <ButtonBox>
        <Button type="button" onClick={next}>
          {t('Next')}
        </Button>
        <Button mb={0} type="button" onClick={closeModal}>
          {t('Cancel')}
        </Button>
      </ButtonBox>
    </>
  );
};

const TwoStep = ({ back, handleChange }) => {
  const { t } = useTranslation();

  const filePicker = useRef(null);

  return (
    <>
      <PetWrap>
        <LabelText htmlFor="photoURL">
          {' '}
          {t('Add_photo_comments')}
          <PetAvatarBtn
            type="button"
            onClick={() => filePicker.current.click()}
          >
            <AddPhotoIcon width={48} height={48} />
          </PetAvatarBtn>
          <HiddenInput
            ref={filePicker}
            type="file"
            name="photoURL"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.gif,.web"
          />
          <ErrorValidation name="photoURL" component="div" />
        </LabelText>
      </PetWrap>

      <Box mb={40}>
        <Label htmlFor="comments">
          {' '}
          {t('Comments')}
          <TextInput
            as="textarea"
            name="comments"
            rows="4"
            placeholder={t('Type_comments')}
          />
          <ErrorValidation name="comments" component="div" />
        </Label>
      </Box>

      <ButtonBox>
        <Button type="submit">{t('Done')}</Button>
        <Button type="button" onClick={back}>
          {t('Back')}
        </Button>
      </ButtonBox>
    </>
  );
};

export { OneStep, TwoStep };
