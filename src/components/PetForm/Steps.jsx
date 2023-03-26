import {
  PetBox,
  Label,
  Input,
  TextInput,
  ErrorValidation,
  Button,
  ButtonBox,
} from './PetForm.styled';

import { Box } from 'components/Box/Box';

const OneStep = ({ next, closeModal }) => {
  return (
    <>
      <PetBox>
        <Label htmlFor="petName">
          {' '}
          Name pet
          <Input
            type="text"
            name="petName"
            placeholder="Type name pet"
            autoFocus
          />
          <ErrorValidation name="petName" component="div" />
        </Label>
      </PetBox>

      {/* <PetBox>
       <Label htmlFor="petBirth"> Date of birth
        <Input as="date" name="petBirth" placeholder="Type date of birth" />
        <ErrorValidation name="petBirth" component="div" />
      </Label> 
      </PetBox> */}

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
          Cansel
        </Button>
      </ButtonBox>
    </>
  );
};

const TwoStep = ({ back }) => {
  return (
    <>
      {/* <PetBox>
      <Label htmlFor="petPhoto"> Add photo and some comments
        <AddPhotoIcon width={48} height={48} />
        <Input as="file" name="petPhoto" />
        <ErrorValidation name="petPhoto" component="div" />
      </Label> 
      </PetBox>*/}

      <Box mb={40}>
        <Label htmlFor="petInfo">
          {' '}
          Comments
          <TextInput type="text" name="petInfo" placeholder="Type comments" />
          <ErrorValidation name="petInfo" component="div" />
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
