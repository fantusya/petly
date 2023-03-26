import { useRef } from 'react';

import {
  PetBox,
  Label,
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
  return (
    <>
      <PetBox>
        <Label htmlFor="name">
          {' '}
          Name pet
          <Input
            type="text"
            name="name"
            placeholder="Type name pet"
            autoFocus
          />
          <ErrorValidation name="name" component="div" />
        </Label>
      </PetBox>

      <PetBox>
        <Label htmlFor="birthDate">
          {' '}
          Date of birth
          <Input
            type="date"
            name="birthDate"
            placeholder="Type date of birth"
          />
          <ErrorValidation name="birthDate" component="div" />
        </Label>
      </PetBox>

      <Box mb={40}>
        <Label htmlFor="breed">
          {' '}
          Breed
          <Input type="text" name="breed" placeholder="Type breed" />
          <ErrorValidation name="breed" component="div" />
        </Label>
      </Box>

      <ButtonBox>
        <Button type="button" onClick={next}>
          Next
        </Button>
        <Button mb={0} type="button" onClick={closeModal}>
          Cancel
        </Button>
      </ButtonBox>
    </>
  );
};

const TwoStep = ({ back, handleChange }) => {
  const filePicker = useRef(null);

  return (
    <>
      <PetBox>
        <Label htmlFor="photoURL">
          {' '}
          Add photo and some comments
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
        </Label>
      </PetBox>

      <Box mb={40}>
        <Label htmlFor="comments">
          {' '}
          Comments
          <TextInput
            as="textarea"
            name="comments"
            rows="5"
            placeholder="Type comments"
          />
          <ErrorValidation name="comments" component="div" />
        </Label>
      </Box>

      <ButtonBox>
        <Button type="submit">Done</Button>
        <Button type="button" onClick={back}>
          Back
        </Button>
      </ButtonBox>
    </>
  );
};

export { OneStep, TwoStep };
