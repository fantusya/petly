import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'helpers/getFormatedDate';
import {
  InfoForm,
  InfoField,
  InfoProp,
  FlatpickrStyled,
  InfoButton,
  Pensil,
  Check,
  Error,
} from '../UserDataItem.styled';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

export const UserBirthday = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const language = localStorage.getItem('i18nextLng');

  const { values, errors, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      birthDate: user?.birthDate,
    },
    onSubmit: ({ birthDate }, { resetForm }) => {
      if (isDisabled) {
        onUpdate();
        setIsUpdating(true);
        return;
      }

      if (birthDate === user.birthDate) {
        onUpdate();
        setIsUpdating(false);

        resetForm();
        return;
      }

      dispatch(updateInfo({ birthDate }));

      onUpdate();
      setIsUpdating(false);

      resetForm();
    },
  });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Birthday')}:</InfoProp>
        {language === 'uk' && (
          <FlatpickrStyled
            data-enable-time
            name="birthDate"
            values={values?.birthDate}
            placeholder={getFormatedDate(user)}
            disabled={isDisabled || !isUpdating}
            options={{
              maxDate: 'today',
              enableTime: false,
              dateFormat: 'd.m.Y',
              locale: Ukrainian,
            }}
            onChange={date => {
              setFieldValue('birthDate', date[0]);
            }}
          />
        )}
        {language !== 'uk' && (
          <FlatpickrStyled
            data-enable-time
            name="birthDate"
            values={values?.birthDate}
            placeholder={getFormatedDate(user)}
            disabled={isDisabled || !isUpdating}
            options={{
              maxDate: 'today',
              enableTime: false,
              dateFormat: 'd.m.Y',
            }}
            onChange={date => {
              setFieldValue('birthDate', date[0]);
            }}
          />
        )}
        {errors.birthDate && touched.birthDate && (
          <Error>{errors.birthDate}</Error>
        )}
      </InfoField>
      <InfoButton type="submit" disabled={!isDisabled && !isUpdating}>
        {isUpdating ? <Check /> : <Pensil />}
      </InfoButton>
    </InfoForm>
  );
};

export default UserBirthday;

UserBirthday.propsType = {
  onUpdate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
