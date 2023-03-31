import * as yup from 'yup';
import i18n from 'i18n';

export const nameValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Too_short'))
    .max(30, i18n.t('Too_long'))
    .trim()
    .required(i18n.t('Name_required')),
});

export const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('Invalid_email'))
    .required(i18n.t('Email_required')),
});

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, i18n.t('Invalid_phone_number'))
    .required(i18n.t('Phone_required')),
});

export const cityValidationSchema = yup.object().shape({
  city: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Too_short'))
    .max(50, i18n.t('Too_long'))
    .trim()
    .required(i18n.t('City_required')),
});
