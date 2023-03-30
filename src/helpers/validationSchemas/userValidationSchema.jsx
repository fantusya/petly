import * as yup from 'yup';

export const nameValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, 'Use only letters')
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .trim()
    .required('Name is required'),
});

export const emailValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number')
    .required('Phone is required'),
});

export const cityValidationSchema = yup.object().shape({
  city: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, 'Use only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .required('City is required'),
});
