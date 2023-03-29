import * as yup from 'yup';

export const validationPetSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, 'Use only letters.')
    .min(2, 'Minimum 2 symbols')
    .max(16, 'Maximum 16 symbols')
    .trim()
    .required('Required name'),
  birthDate: yup.date().max(new Date()).required('Required birth date'),
  breed: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, 'Use only letters.')
    .min(2, 'Minimum 2 symbols')
    .max(16, 'Maximum 16 symbols')
    .trim()
    .required('Required breed'),
  photoURL: yup.string(),
  comments: yup
    .string()
    .min(8, 'Minimum 8 symbols')
    .max(120, 'Maximum 120 symbols'),
  // .required('Required comments'),
});
