import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import { useFetchingData } from 'hooks';

import { signup, logIn } from 'redux/auth/operations';

import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';

import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

import RouteFormLoginRegister from 'pages/routeFormLoginRegister';
import {
  BoxAuth,
  FormCustom,
  LogoBg,
  TitleAuth,
} from 'pages/authFormStyle.styled';

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

  //////////// CITIES LOGIC
  // const query = 'Dnipro';
  // const { status, results } = useFetchingData('api/cities', query);

  // const array = results.map(({ useCounty, stateEn, cityEn, countyEn }) => {
  //   return Number(useCounty)
  //     ? `${cityEn}, ${countyEn}, ${stateEn} region`
  //     : `${cityEn}, ${stateEn} region`;
  // });
  // console.log('array', array);
  ///////////

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
    <Box as="section">
      <LogoBg>
        <Container>
          <BoxAuth>
            <TitleAuth>Registration</TitleAuth>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={registerValidationSchema}
              autoComplete="off"
            >
              <FormCustom autoComplete="off">{steps[currentStep]}</FormCustom>
            </Formik>

            <RouteFormLoginRegister
              link="/login"
              question="Already have an account??"
              pageName="login"
            />
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default RegisterPage;
