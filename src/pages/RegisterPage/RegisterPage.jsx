import {
  H2,
  Wrapper,
  RegisterForm,
  Text,
} from 'pages/RegisterPage/RegisterPage.styled';
import { Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
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

export default RegisterPage;
