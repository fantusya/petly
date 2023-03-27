import * as Yup from 'yup';

// const registerValidationSchema = Yup.object({
//   email: Yup.string()
//     .matches(
//       /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//       'Error! Email must be in a format: aaaaa@aaa.aaa'
//     )
//     .min(12, 'At least 12 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Required field'),
//   password: Yup.string()
//     .matches(/^\S+$/, 'Space is not allowed')
//     .min(7, 'At least 7 symbols')
//     .max(32, 'Maximum 32 symbols')
//     .required('Required field'),
//   confirm: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Required field'),
//   name: Yup.string()
//     .matches(
//       /^[a-zA-Zа-яА-ЯіІїЇґҐ\s]*[a-zA-Zа-яА-ЯіІїЇґҐ][a-zA-Zа-яА-ЯіІїЇґҐ\s]*$/,
//       'Only cyrillic and latin letters are allowed'
//     )
//     .required('Required field'),
//   city: Yup.string().required('Required field (City, region)'),
//   phone: Yup.string()
//     .matches(/^\+380\d{9}$/, 'Invalid phone number(+380111111111)')
//     .min(13)
//     .max(13)
//     .required('Required field'),
// });

// export default registerValidationSchema;

export const registerValidationSchemaOne = Yup.object({
  email: Yup.string()
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Error! Email must be in a format: aaaaa@aaa.aaa'
    )
    .min(12, 'At least 12 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Required field'),
  password: Yup.string()
    .matches(/^\S+$/, 'Space is not allowed')
    .min(7, 'At least 7 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Required field'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required field'),
});

export const registerValidationSchemaTwo = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ\s]*[a-zA-Zа-яА-ЯіІїЇґҐ][a-zA-Zа-яА-ЯіІїЇґҐ\s]*$/,
      'Only cyrillic and latin letters are allowed'
    )
    .required('Required field'),
  city: Yup.string().required('Required field (City, region)'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number(+380111111111)')
    .min(13)
    .max(13)
    .required('Required field'),
});
