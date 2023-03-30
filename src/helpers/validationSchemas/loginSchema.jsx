import * as yup from 'yup';
import i18n from 'i18n';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(12, i18n.t('at_least_twelve'))
    .max(50, 'Max_fifty')
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      i18n.t('Invalid_email')
    )
    .required(i18n.t('Email_required')),
  password: yup
    .string()
    .min(7, i18n.t('at_least_seven'))
    .max(32, i18n.t('max_tt'))
    .matches(/^\S+$/, i18n.t('Password_contain'))
    .required(i18n.t('Password_required')),
});

export default schema;
