import * as Yup from 'yup';
import i18n from 'i18n';

export const stepOneSchema = Yup.object({
  category: Yup.string().required(i18n.t('Choose_category')),
  title: Yup.string()
    .min(2, i18n.t('Min_char'))
    .max(48, i18n.t('Char_max'))
    .trim()
    .required(i18n.t('Title_is_required')),
  name: Yup.string()
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .required(i18n.t('Name_required')),
  birthDate: Yup.string()
    .max(new Date(), i18n.t('Date_past'))
    .required(i18n.t('Choose_date_birth')),
  breed: Yup.string()
    .min(2, i18n.t('Min_char'))
    .max(24, i18n.t('Tw_char_max'))
    .trim()
    .required(i18n.t('Breed_required')),
});

export const stepTwoSchema = Yup.object({
  sex: Yup.string().required(i18n.t('Choose_sex')),
  location: Yup.string().required(i18n.t('Type_location')),
  price: Yup.number(i18n.t('only_numbers'))
    .positive()
    .truncate()
    .min(0.01, i18n.t('greater_zero')),
  // .required(i18n.t('Set_price')),
  // .matches(/^[0-9][0-9]*$/, i18n.t('Numbers_only')),
  photoURL: Yup.string().required(),
  comments: Yup.string()
    .min(8, i18n.t('Eight_char_min'))
    .max(120, i18n.t('Oh_char_max'))
    .trim()
    .required(i18n.t('Type_comments')),
});
