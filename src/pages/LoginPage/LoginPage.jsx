import { Formik } from 'formik';
import schema from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations.js';
import RouteFormLoginRegister from '../routeFormLoginRegister.jsx';
import GooglePic from '../../images/svg/google-color-svgrepo-com.svg';
import { useState } from 'react';
import { RxLockOpen1, RxLockClosed } from 'react-icons/rx';

import {
  TitleAuth,
  FormCustom,
  Button,
  Input,
  Error,
  BoxAuth,
  LogoBg,
  Icon,
} from '../authFormStyle.styled';

import { GoogleLoginButton, GoogleImg } from './LoginPage.styled.jsx';

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

                <Input
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                />

                <Icon onClick={togglePassword}>
                  {passwordShown ? <RxLockOpen1 /> : <RxLockClosed />}
                </Icon>
                <Error name="password" component="div" />
                <Button type="submit">Login</Button>
              </FormCustom>
            </Formik>

            <RouteFormLoginRegister
              link="/register"
              question="Don't have an account?"
              pageName="Register"
            />

            {/* <LoginButton type="submit">Login</LoginButton> */}

            <GoogleLoginButton href="https://uninterested-hose-newt.cyclic.app/api/users/google">
              <GoogleImg src={GooglePic} alt="Google" />
              Login with Google
            </GoogleLoginButton>
          </BoxAuth>
        </Container>
      </LogoBg>
    </Box>
  );
};

export default LoginPage;
