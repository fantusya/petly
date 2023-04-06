import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import toast from 'react-hot-toast';

import { signup, logIn } from 'redux/auth/operations';

import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';

import {
  registerValidationSchemaOne,
  registerValidationSchemaTwo,
} from 'helpers/validationSchemas/RegisterValidationSchema';

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
  const location = useLocation();

  useEffect(() => {
    document.title = `Registration`;
  }, [location]);

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
    if (!city) {
      toast.error(i18n.t('City_required'));
      return;
    }
    if (phone.length !== 13) {
      toast.error(i18n.t('Enter_phone'));
      return;
    }

    const resultSignup = await dispatch(
      signup({ email, password, name, city, phone })
    );

    if (resultSignup.type === 'auth/signup/fulfilled') {
      await dispatch(logIn({ email, password }));
    }

    if (resultSignup.type === 'auth/signup/rejected') {
      toast.error(resultSignup.payload.message);
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
                      forCity={value => {
                        setFieldValue('city', value);
                      }}
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
