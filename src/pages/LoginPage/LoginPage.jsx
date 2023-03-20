import { Formik } from 'formik';
import { schema } from 'helpers/validationSchemas/loginSchema';
import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux';
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
        <h2>Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form autoComplete="on">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Email" required />
            <Error name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <ErrorMessage name="password" component="div" />
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
