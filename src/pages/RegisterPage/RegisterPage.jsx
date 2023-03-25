import {
  H2,
  Wrapper,
  InputReg,
  RegisterForm,
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
import { Formik } from 'formik';

import { Container } from 'globalStyles/globalStyle';
import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import GooglePic from 'images/svg/google-color-svgrepo-com.svg';
import { signup, logIn } from 'redux/auth/operations';

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

const StepOne = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <InputReg type="email" name="email" placeholder="Email" />
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
          {passwordVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
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
