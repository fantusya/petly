import { Formik, Form, Field } from 'formik';
import { schema } from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { RouteFormLoginRegister } from '../routeFormLoginRegister.jsx';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

  return (
    <Box as="section">
      <Container>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form autoComplete="on">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Email" required />

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </Form>
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
