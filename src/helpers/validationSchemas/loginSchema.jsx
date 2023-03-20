import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(12, 'At least 12 symbols')
    .max(50, 'Maximum 50 symbols')
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email'
    )
    .required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 32 symbols')
    .matches(
      /^\S+$/,
      'Password can contain any letters and symbols without spaces'
    )
    .required('Password is a required field'),
});

export default schema;
