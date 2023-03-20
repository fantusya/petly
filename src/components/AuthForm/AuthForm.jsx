import * as Yup from 'yup';

import {
  H2,
  Wrapper,
  Input,
  RegisterForm,
  RegisterButton,
  Text,
  Error,
} from 'components/AuthForm/AuthForm.style';
import { Formik } from 'formik';
import { Container } from 'globalStyles/globalStyle';

const handleSubmit = (
  { email, password, confirm, name, city, phone },
  { resetForm }
) => {
  //   dispatch(register({ name, email, password }));
  resetForm();
};
const initialValues = {
  email: '',
  password: '',
  confirm: '',
  name: '',
  city: '',
  phone: '',
};

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email pattern')
    .min(6, 'At least 6 symbols')
    .required('Required field'),

  password: Yup.string()
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Required field'),

  confirm: Yup.string()
    .min(6, 'At least 6 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),

  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters are allowed'
    )
    .min(5, 'At least 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Required field'),
  city: Yup.string()
    .min(6, 'At least 6 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),

  phone: Yup.number()
    .truncate(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )

    .required('Required field'),
});

export const AuthForm = () => {
  return (
    <Container>
      <Wrapper>
        <>
          <H2>Registration</H2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={registerValidationSchema}
          >
            <RegisterForm>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <Error name="email" component="div" />
              <Input type="password" name="password" placeholder="Password" />
              <Error name="password" component="div" />
              <Input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
              />
              <Error name="confirm" component="div" />
              <Input type="text" name="name" placeholder="Name" />
              <Error name="name" component="div" />
              <Input type="text" name="city" placeholder="City, region" />
              <Error name="city" component="div" />
              <Input type="tel" name="phone" placeholder="Mobile phone" />
              <Error name="phone" component="div" />
              <RegisterButton type="submit">Register</RegisterButton>
              <RegisterButton type="button">Next</RegisterButton>
              <RegisterButton type="button">Back</RegisterButton>
            </RegisterForm>
          </Formik>
          <Text>
            Already have an account?
            <a href="http://localhost:3000/petly">Login</a>
          </Text>
        </>
      </Wrapper>
    </Container>
  );
};

export default AuthForm;
