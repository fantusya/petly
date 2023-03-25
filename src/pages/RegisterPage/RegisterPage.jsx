import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { signup, logIn } from 'redux/auth/operations';

import { Container } from 'globalStyles/globalStyle';
import GooglePic from 'images/svg/google-color-svgrepo-com.svg';

import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

import {
  H2,
  Wrapper,
  RegisterForm,
  Text,
  RegisterButton,
  GoogleRegisterButton,
  Text,
  ErrorValid,
  GoogleImg,
  Button,
  Div,
  OpenEyaIcon,
  ClosedEyaIcon,
} from 'pages/RegisterPage/RegisterPage.styled';

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

  const handleSubmit = async (
    { email, password, name, city, phone },
    { resetForm }
  ) => {
    const resultSignup = await dispatch(
      signup({ email, password, name, city, phone })
    );
    if (resultSignup.type === 'auth/signup/fulfilled') {
      console.log('resultSignup', resultSignup);
      const resultLogIn = await dispatch(logIn({ email, password }));
      console.log('resultLogIn', resultLogIn);
    }

    resetForm();
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
              <RegisterForm autoComplete="off">
                {steps[currentStep]}
              </RegisterForm>
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

export default RegisterPage;
