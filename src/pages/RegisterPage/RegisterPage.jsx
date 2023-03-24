import {
  H2,
  Wrapper,
  InputReg,
  RegisterForm,
  RegisterButton,
  Text,
  ErrorValid,
  Button,
  Div,
} from 'pages/RegisterPage/RegisterPage.styled';
import { Formik } from 'formik';

import { Container } from 'globalStyles/globalStyle';
import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/operations';
// import RouteFormLoginRegister from 'pages/routeFormLoginRegister';

const initialValues = {
  email: '',
  password: '',
  confirm: '',
  name: '',
  city: '',
  phone: '',
};

export const RegisterPage = () => {
  // ____________________________________________________________________________
  const [currentStep, setCarrentStep] = useState(0);

  const dispatch = useDispatch();

  const handleNextStep = () => {
    setCarrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCarrentStep(prev => prev - 1);
  };

  const handleSubmit = (
    { email, password, name, city, phone },
    { resetForm }
  ) => {
    dispatch(signup({ email, password, name, city, phone }));
    resetForm();

    console.log(email);
    console.log(password);
  };

  const steps = [
    <StepOne next={handleNextStep} />,
    <StepTwo back={handlePrevStep} />,
  ];

  return (
    <section>
      <Container>
        <Wrapper>
          <>
            <H2>Registration</H2>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={registerValidationSchema}
              autoComplete="off"
            >
              <RegisterForm>{steps[currentStep]}</RegisterForm>
            </Formik>
            <Text>
              Already have an account?
              <a href="http://localhost:3000/petly">Login</a>
            </Text>

            {/* <RouteFormLoginRegister
            link="/login"
            question="Already have an account??"
            pageName="login"
          /> */}
          </>
        </Wrapper>
      </Container>
    </section>
  );
};

const StepOne = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <InputReg
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
      />
      <ErrorValid name="email" component="div" />
      <Div>
        <InputReg
          // type="password"
          id="password"
          name="password"
          placeholder="Password"
          type={passwordVisibility ? 'text' : 'password'}
        ></InputReg>
        <Button type="button" onClick={toggleShowPassword}>
          {passwordVisibility ? '🐵' : '🙈'}
        </Button>
      </Div>
      <ErrorValid name="password" component="div" />

      <InputReg
        // type="password"
        type={passwordVisibility ? 'text' : 'password'}
        name="confirm"
        placeholder="Confirm Password"
      />

      <ErrorValid name="confirm" component="div" />
      <RegisterButton type="button" onClick={props.next} disabled={false}>
        Next
      </RegisterButton>
    </>
  );
};
const StepTwo = props => {
  return (
    <>
      <InputReg type="text" name="name" placeholder="Name" />
      <ErrorValid name="name" component="div" />
      <InputReg type="text" name="city" placeholder="City, region" />
      <ErrorValid name="city" component="div" />
      <InputReg type="tel" name="phone" placeholder="Mobile phone" />
      <ErrorValid name="phone" component="div" />

      <RegisterButton type="submit">Register</RegisterButton>
      <RegisterButton type="button" onClick={props.back}>
        Back
      </RegisterButton>
    </>
  );
};

export default RegisterPage;
