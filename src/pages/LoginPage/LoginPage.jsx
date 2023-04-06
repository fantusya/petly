import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import schema from 'helpers/validationSchemas/loginSchema';
import { logIn } from 'redux/auth/operations.js';

import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import GooglePic from 'images/svg/google-color-svgrepo-com.svg';

import RouteFormLoginRegister from '../routeFormLoginRegister.jsx';
import CustomField from '../authFormStyle.styled';
import {
  TitleAuth,
  FormCustom,
  Button,
  Error,
  BoxAuth,
  LogoBg,
} from '../authFormStyle.styled';

import {
  GoogleLoginButton,
  GoogleImg,
  LoginPOsitionBtn,
} from './LoginPage.styled.jsx';

import {
  ButtonImg,
  ClosedEyaIcon,
  Div,
  OpenEyaIcon,
} from 'pages/RegisterPage/RegisterPage.styled.jsx';

export const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = `Login`;
  }, [location]);

  const handleSubmit = async (values, { resetForm }) => {
    const resultLogin = await dispatch(logIn(values));

    if (resultLogin.type === 'auth/login/rejected') {
      toast.error(resultLogin.payload.message);
    }

    resetForm();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Box as="section">
      <LogoBg>
        <Container>
          <BoxAuth>
            <TitleAuth>{t('Login')}</TitleAuth>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {({ errors, touched, values }) => (
                <FormCustom>
                  <CustomField
                    type="email"
                    name="email"
                    placeholder={t('Email')}
                    autoComplete="off"
                    errors={errors}
                    touched={touched}
                    values={values.email}
                    required
                  />

                  <Error name="email" component="div" />

                  <CustomField
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder={t('Password')}
                    autoComplete="off"
                    errors={errors}
                    touched={touched}
                    values={values.password}
                    required
                  />
                  <Div>
                    <LoginPOsitionBtn>
                      <ButtonImg type="button" onClick={togglePassword}>
                        {passwordShown ? <OpenEyaIcon /> : <ClosedEyaIcon />}
                      </ButtonImg>
                    </LoginPOsitionBtn>

                    <Error name="password" component="div" />
                  </Div>
                  <Button type="submit">{t('Login')}</Button>
                  <GoogleLoginButton href="https://petly-gd7x.onrender.com/api/users/google">
                    <GoogleImg src={GooglePic} alt="Google" />
                    {t('Login_with_Google')}
                  </GoogleLoginButton>
                </FormCustom>
              )}
            </Formik>
            <RouteFormLoginRegister
              link="/register"
              question={t('No_account')}
              pageName={t('Register')}
            />
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default LoginPage;
