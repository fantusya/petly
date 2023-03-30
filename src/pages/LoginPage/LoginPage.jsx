import { Formik } from 'formik';
import schema from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations.js';
import RouteFormLoginRegister from '../routeFormLoginRegister.jsx';
import GooglePic from '../../images/svg/google-color-svgrepo-com.svg';
import { useState } from 'react';
import CustomField from '../authFormStyle.styled';
import { useTranslation } from 'react-i18next';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ToastContainer;
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
  StyledContainer,
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

  const handleSubmit = async (values, { resetForm }) => {
    const resultLogin = await dispatch(logIn(values));

    console.log(resultLogin);

    if (resultLogin.type === 'auth/login/rejected') {
      toast.error('Email or password is wrong !!!', {
        position: 'top-right',
        transition: Zoom,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light ',
      });
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
            <StyledContainer />
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
            {/* <LoginButton type="submit">Login</LoginButton> */}
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default LoginPage;
