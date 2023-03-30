import { Formik } from 'formik';

import { stepOneSchema } from 'helpers/validationSchemas/addNotice';
import { TextField } from 'helpers/addNoticeCustomField/noticeInput';
import {
  ActionButton,
  ActionButtonsWrapper,
  DateInput,
  ErrorStyle,
  FormWrapper,
  InputCont,
  RadioGroup,
  TextInput,
  TextLabel,
  UserComment,
} from '../AddNoticeModal.styled';
import { Box } from 'components/Box/Box';

const StepOne = props => {
  const handleSubmit = values => {
    props.next({ ...values });
  };

  return (
    <Formik
      validationSchema={stepOneSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <FormWrapper>
          <UserComment>
            You can add a pet for others to buy or take it into good hands.
          </UserComment>
          <RadioGroup>
            <TextField
              type="radio"
              name="category"
              value="sell"
              label="sell"
              checked
            />
            <TextField
              type="radio"
              name="category"
              value="for-free"
              label="in good hands"
            />
            <TextField
              type="radio"
              name="category"
              value="lost-found"
              label="lost/found"
            />
          </RadioGroup>

          <Box>
            <InputCont>
              <TextLabel htmlFor="title">Title of ad</TextLabel>
              <TextInput name="title" placeholder="Type notice title" />
              <ErrorStyle name="title" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="name">Name pet</TextLabel>
              <TextInput name="name" placeholder="Type name pet" />
              <ErrorStyle name="name" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="birthDate">Date of birth</TextLabel>
              <DateInput
                data-enable-time
                value={values?.birthDate}
                options={{
                  maxDate: 'today',
                  enableTime: false,
                  dateFormat: 'd.m.Y',
                }}
                onChange={date => {
                  setFieldValue('birthDate', date[0].toLocaleDateString());
                }}
                placeholder="Select the date"
              />
              <ErrorStyle name="birthDate" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="breed">Breed</TextLabel>
              <TextInput name="breed" placeholder="Type breed" />
              <ErrorStyle name="breed" component="div" />
            </InputCont>
          </Box>

          <ActionButtonsWrapper>
            <ActionButton type="button" onClick={props.handleModalToggle}>
              Cancel
            </ActionButton>
            <ActionButton type="submit">Next</ActionButton>
          </ActionButtonsWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default StepOne;
