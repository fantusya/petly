import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import i18n from 'i18n';
import toast from 'react-hot-toast';

// import flatpickr from "flatpickr";

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
  PreviewContainer,
  PreviewImg,
  RemoveImgBtn,
} from './PetForm.styled';

import { Box } from 'components/Box/Box';

const OneStep = ({ next, closeModal, errors, isValid }) => {
  const { t } = useTranslation();

  // const fp = flatpickr("#birthDate", {
  //   altInput: true,
  //     altFormat: "j F Y",
  //     dateFormat: "Y-m-d",
  //     disable: [
  //       {
  //           from: new Date(),
  //           to: "2030-01-01",
  //       }
  //   ],
  // });

  // // console.log('fp', fp);

  //  date-вибрана дата, не можна покласти в стейт
  // const date = fp?.selectedDates?.[0];

  return (
    <>
      <PetBox>
        <Label htmlFor="name">
          {' '}
          {t('Name_pet')}
          <Input
            id="name"
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
            id="birthDate"
            type="date"
            name="birthDate"
            // value={date}
            // onChange={() => {console.log(fp.current.flatpickr.selectedDates[0])}}

            placeholder={t('Type_date_of_birth')}
            autoFocus
          />
          <ErrorValidation name="birthDate" component="div" />
        </Label>
      </PetBox>

      <Box mb={40} mt={4}>
        <Label htmlFor="breed">
          {' '}
          {t('Breed')}
          <Input
            id="breed"
            type="text"
            name="breed"
            placeholder={t('Type_breed')}
            autoFocus
          />
          <ErrorValidation name="breed" component="div" />
        </Label>
      </Box>

      <ButtonBox>
        <Button type="button" disabled={isValid} onClick={next}>
          {t('Next')}
        </Button>
        <Button mb={0} type="button" onClick={closeModal}>
          {t('Cancel')}
        </Button>
      </ButtonBox>
    </>
  );
};

const TwoStep = ({ back, onSelectedImg }) => {
  const { t } = useTranslation();

  // const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const filePicker = useRef(null);

  const handleChange = e => {
    const chosenImg = e.target.files[0];
    console.log('chosenImg', chosenImg);

    if (!e.target.files.length || !chosenImg) {
      // setSelectedFile(null);
      toast.warning(i18n.t('Choose an image to change avatar your pet!'));
      return;
    }
    // setSelectedFile(chosenImg);

    onSelectedImg(chosenImg);

    const reader = new FileReader();
    reader.onload = e => {
      setPreviewImg(e.target.result);
    };
    reader.readAsDataURL(chosenImg);
  };

  const handleDeleteImg = e => {
    onSelectedImg(null);
    setPreviewImg(null);
  };

  return (
    <>
      <PetWrap>
        {previewImg ? (
          <PreviewContainer>
            <RemoveImgBtn type="button" onClick={handleDeleteImg}>
              &times;
            </RemoveImgBtn>
            <PreviewImg src={previewImg} alt="Preview" />
          </PreviewContainer>
        ) : (
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
        )}
      </PetWrap>

      <Box mb={40}>
        <Label htmlFor="comments">
          {' '}
          {t('Comments')}
          <TextInput
            // as="textarea"
            type="text"
            name="comments"
            rows="4"
            placeholder={t('Type_comments')}
            required="Required comments"
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
