import * as yup from 'yup';

export const validationPetSchema = yup.object().shape({
  petName: yup
    .string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .trim()
    .required('Required field'),
  petBirth: yup.date().max(new Date()).required('Required field'),
  breed: yup
    .string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .trim()
    .required('Required field'),
  petPhoto: yup.string().required('Required field'),
  petInfo: yup
    .string()
    .min(10, 'Minimum 10 symbols')
    .max(300, 'Maximum 300 symbols')
    .required('Required field'),
});
