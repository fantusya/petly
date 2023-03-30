import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import toast from 'react-hot-toast';

// import { useFetchingData } from 'hooks';

import { signup, logIn } from 'redux/auth/operations';

import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';

import {
  registerValidationSchemaOne,
  registerValidationSchemaTwo,
} from 'helpers/validationSchemas/RegisterValidationSchema';

// import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
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
  const { t } = useTranslation();

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
    setCarrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCarrentStep(currentStep - 1);
  };

  const handleSubmit = async (
    { email, password, name, city, phone },
    { resetForm }
  ) => {
    // console.log('phone', phone);
    // if (!phone) {
    //   toast.error('Please enter your phone');
    // }
    if (phone.length !== 13) {
      console.log('INVALID');
      toast.error(i18n.t('Enter_phone'));
      return;
    }
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

  return (
    <Box as="section">
      <LogoBg>
        <Container>
          <BoxAuth>
            <TitleAuth>{t('Registration')}</TitleAuth>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={
                currentStep === 0
                  ? registerValidationSchemaOne
                  : registerValidationSchemaTwo
              }
            >
              {({ errors, touched, isValid, setFieldValue, values }) => (
                <FormCustom autoComplete="off">
                  {currentStep === 0 && (
                    <StepOne
                      next={handleNextStep}
                      errors={errors}
                      touched={touched}
                      isValid={!isValid}
                      values={values}
                    />
                  )}
                  {currentStep === 1 && (
                    <StepTwo
                      back={handlePrevStep}
                      errors={errors}
                      touched={touched}
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  )}
                </FormCustom>
              )}
            </Formik>

            <RouteFormLoginRegister
              link="/login"
              question={t('Is_account')}
              pageName={t('Log_in')}
            />
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default RegisterPage;
