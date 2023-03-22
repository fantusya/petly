import * as Yup from 'yup';

const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email pattern')
    .min(6, 'At least 6 symbols')
    .required('Required field'),

  password: Yup.string()
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Required field'),

  confirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'passwords must match')
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 30 symbols')
    .required('Required field'),

  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters are allowed'
    )
    .min(5, 'At least 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Required field'),
  city: Yup.string()
    .min(6, 'At least 6 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),

  phone: Yup.number()
    .truncate(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )

    .required('Required field'),
});

export default registerValidationSchema;
