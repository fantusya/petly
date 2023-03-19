import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 32 symbols')
    .matches(
      / ^(?!.* ).{7,32}$/,
      'Password can contain any letters and symbols without spaces'
    )
    .required('Password is a required field'),
});

export default schema;
