import * as yup from 'yup';
import i18n from 'i18n';

export const validationOne = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .required(i18n.t('Name_required')),
  birthDate: yup
    .string()
    .max(new Date())
    .required(i18n.t('Birthdate_required')),
  breed: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .required(i18n.t('Breed_required')),
});

export const validationTwo = yup.object().shape({
  photoURL: yup.string().required(),
  comments: yup
    .string()
    .min(8, i18n.t('Eight_char_min'))
    .max(120, i18n.t('Oh_char_max'))
    .required(i18n.t('Type_comments')),
});
