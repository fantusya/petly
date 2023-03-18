import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email('').required(),
  password: yup
    .string()
    .min(4)
    .max(12)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Password is correct'
    )
    .required(),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
