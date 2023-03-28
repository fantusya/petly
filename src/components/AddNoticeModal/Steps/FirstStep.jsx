import { Box } from 'components/Box/Box';
import React from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
import {
    ErrorStyle,
    FirstForm,
    InputCont,
    TextInput,
    TextLabel,
    UserComment,
    RadioGroup,
    RadioLabel,
    RadioInput,
    RadioButton,
} from '../AddNoticeModal.styled';
import DatePickerInput from './DatePickerForm';

const FirstStep = ({ value }) => {

  return (
    <FirstForm>
      <UserComment>You can add a pet for others to buy or take it into good
              hands.
      </UserComment>

      <RadioGroup>
        <RadioLabel name="filter" selected={value === 'lost-found'}>
            <RadioInput
                type="radio"
                name="category"
                value="lost-found"
                checked={value === 'lost-found'}
            />
            <RadioButton>lost/found</RadioButton>
              </RadioLabel>
              
        <RadioLabel name="filter" selected={value === 'in-good-hands'}>
            <RadioInput
                type="radio"
                name="category"
                value="in-good-hands"
                checked={value === 'in-good-hands'}
            />
            <RadioButton>in good hands</RadioButton>
        </RadioLabel>
        <RadioLabel name="filter" selected={value === 'sell'}>
        <RadioInput
            type="radio"
            name="category"
            value="sell"
            checked={value === 'sell'}
        />
        <RadioButton>sell</RadioButton>
        </RadioLabel>
          </RadioGroup>    
          
      <InputCont>
            <TextLabel htmlFor="title">
                  Title of ad
            </TextLabel>
            <TextInput
                name="title"
                type="text"
                placeholder="Type name"
            />              
            <ErrorStyle name="title" component="div" />
      </InputCont>
          
      <InputCont>
            <TextLabel htmlFor="name">
                Name pet
            </TextLabel>
            <TextInput
                name="name"
                type="text"
                placeholder="Type name pet"
            />              
            <ErrorStyle name="name" component="div" />
      </InputCont>
          
      <Box position="relative">
        <TextLabel htmlFor="birthDate">
            Date of birth
        </TextLabel>
        <DatePickerInput
          name="birthDate"
          label="Date of birth*"
          placeholder="Type date of birth"
        />
        <ErrorStyle name="birthDate" component="div" />
      </Box>
          
      <InputCont>
            <TextLabel htmlFor="breed">
                Name pet
            </TextLabel>
            <TextInput
                name="breed"
                type="text"
                placeholder="Type breed"
            />              
            <ErrorStyle name="breed" component="div" />
        </InputCont>
    </FirstForm>
  );
};

export default FirstStep;