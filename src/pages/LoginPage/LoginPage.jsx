import { Formik } from 'formik';
import schema from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
// import { useDispatch } from 'react-redux';
import RouteFormLoginRegister from '../routeFormLoginRegister.jsx';
import GooglePic from '../../images/svg/google-color-svgrepo-com.svg';
import {
  TitleAuth,
  FormCustom,
  LoginButton,
  Input,
  GoogleLoginButton,
  GoogleImg,
} from './LoginPage.styled.jsx';

export const LoginPage = () => {
  // const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('Hallo', values);

    // dispatch(logIn(values));
    // if (error !== null) {
    resetForm();
    // }
  };

  return (
    <Box as="section">
      <Container>
        <TitleAuth>Login</TitleAuth>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <FormCustom autoComplete="off">
            <Input type="email" name="email" placeholder="Email" required />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <LoginButton type="submit">Login</LoginButton>
            <GoogleLoginButton href="https://uninterested-hose-newt.cyclic.app/api/users/google">
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
      </Container>
    </Box>
  );
};

export default LoginPage;
