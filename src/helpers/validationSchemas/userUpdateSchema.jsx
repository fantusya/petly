import * as yup from 'yup';
import i18n from 'i18n';

const phoneRegexp = /^\+380\d{9}$/;
const emailRegexp = /^[^а-яА-ЯёЁ!#$%*/?^`+&{|}~]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const nameRegexp =
  /^[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*[a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'][a-zA-Zа-яА-ЯіІїЇґҐщЩьЬЄє'\s]*$/;
const cityRegexp =
  /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇґҐ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇґҐ'’\s-]+$/;

export const userUpdateSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, i18n.t('Min_char'))
    .max(16, i18n.t('Sixteen_char_max'))
    .trim()
    .matches(nameRegexp, 'Only cyrillic and latin letters are allowed'),
  email: yup
    .string()
    .max(63, 'Email should be 63 characters maximum.')
    .min(5, 'At least 5 symbols')
    .matches(
      emailRegexp,
      "Error! Email must be except .ru. Don't use cyrillic, special symbols, besides '-', '_', '.'"
    ),
  birthDate: yup.string().max(new Date(), i18n.t('Date_past')),
  phone: yup
    .string()
    .matches(phoneRegexp, 'Invalid phone number(+380111111111)'),
  city: yup
    .string()
    .matches(
      cityRegexp,
      'Should be "City, Region" separated by comma, only letters can be accepted'
    ),
});
