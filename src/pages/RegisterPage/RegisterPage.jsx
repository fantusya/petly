import {
  H2,
  Wrapper,
  Input,
  RegisterForm,
  RegisterButton,
  GoogleRegisterButton,
  Text,
  ErrorValid,
  GoogleImg,
} from 'pages/RegisterPage/RegisterPage.styled';
import { Formik } from 'formik';

import { Container } from 'globalStyles/globalStyle';
import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/operations';
import GooglePic from '../../images/svg/google-color-svgrepo-com.svg';

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
  const [currentStep, setCarrentStep] = useState(0);

  const dispatch = useDispatch();

  const handleNextStep = () => {
    setCarrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCarrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} />,
    <StepTwo back={handlePrevStep} />,
  ];

  const handleSubmit = (
    { email, password, name, city, phone },
    { resetForm }
  ) => {
    dispatch(signup({ email, password, name, city, phone }));
    resetForm();

    console.log(email);
    console.log(password);
  };

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
  return (
    <>
      <Input type="email" name="email" placeholder="Email" autoComplete="off" />
      <ErrorValid name="email" component="div" />
      <Input type="password" name="password" placeholder="Password" />
      <ErrorValid name="password" component="div" />
      <Input type="password" name="confirm" placeholder="Confirm Password" />
      <ErrorValid name="confirm" component="div" />
      <RegisterButton
        type="button"
        onClick={props.next}
        id="next"
        // disabled={props.valid}
      >
        Next
      </RegisterButton>
      <GoogleRegisterButton href="https://uninterested-hose-newt.cyclic.app/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        Signup with Google
      </GoogleRegisterButton>
    </>
  );
};
const StepTwo = props => {
  return (
    <>
      <Input type="text" name="name" placeholder="Name" />
      <ErrorValid name="name" component="div" />
      <Input type="text" name="city" placeholder="City, region" />
      <ErrorValid name="city" component="div" />
      <Input type="tel" name="phone" placeholder="Mobile phone" />
      <ErrorValid name="phone" component="div" />

      <RegisterButton type="submit">Register</RegisterButton>
      <RegisterButton type="button" onClick={props.back}>
        Back
      </RegisterButton>
    </>
  );
};

export default RegisterPage;
