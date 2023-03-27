import { Formik } from 'formik';
import schema from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations.js';
import RouteFormLoginRegister from '../routeFormLoginRegister.jsx';
import GooglePic from '../../images/svg/google-color-svgrepo-com.svg';
import { useState } from 'react';

import {
  TitleAuth,
  FormCustom,
  Button,
  Input,
  Error,
  BoxAuth,
  LogoBg,
  // Icon,
} from '../authFormStyle.styled';

import { GoogleLoginButton, GoogleImg } from './LoginPage.styled.jsx';
import {
  ButtonImg,
  ClosedEyaIcon,
  Div,
  OpenEyaIcon,
} from 'pages/RegisterPage/RegisterPage.styled.jsx';

export const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('Привет я твой боди', values);
    dispatch(logIn(values));
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
            <TitleAuth>Login</TitleAuth>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <FormCustom>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
                <Error name="email" component="div" />
                <Div>
                  <Input
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    required
                  />

                  <ButtonImg onClick={togglePassword}>
                    {passwordShown ? <OpenEyaIcon /> : <ClosedEyaIcon />}
                  </ButtonImg>
                  <Error name="password" component="div" />
                </Div>
                <Button type="submit">Login</Button>
                <GoogleLoginButton href="https://petly-gd7x.onrender.com/api/users/google">
                  <GoogleImg src={GooglePic} alt="Google" />
                  Login with Google
                </GoogleLoginButton>
              </FormCustom>
            </Formik>

            <RouteFormLoginRegister
              link="/register"
              question="Don't have an account?"
              pageName="Register"
            />

            {/* <LoginButton type="submit">Login</LoginButton> */}
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default LoginPage;
