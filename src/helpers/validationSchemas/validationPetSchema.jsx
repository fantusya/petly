import * as yup from 'yup';
import i18n from 'i18n';

export const validationPetSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .required(i18n.t('Name_required')),
  birthDate: yup.date().max(new Date()).required(i18n.t('Birthdate_required')),
  breed: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .required('Required breed'),
  photoURL: yup.string(),
  comments: yup
    .string()
    .min(8, i18n.t('Eight_char_min'))
    .max(120, i18n.t('Oh_char_max')),
  // .required('Required comments'),
});
