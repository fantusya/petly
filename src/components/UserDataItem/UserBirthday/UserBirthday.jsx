import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
// import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/themes/material_orange.css';

import { useTranslation } from 'react-i18next';
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

const basicSchema = yup.object().shape({
  birthDate: yup.date().typeError('Please enter a valid date').nullable(),
});

export const UserBirthday = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      birthDate: user?.birthDate,
    },
    validationSchema: basicSchema,
    onSubmit: ({ birthDate }, { resetForm }) => {
      console.log(birthDate);

      if (isDisabled) {
        onUpdate();
        setIsUpdating(true);
        console.log('Not submit');
        return;
      }

      dispatch(updateInfo({ birthDate }));

      onUpdate();
      setIsUpdating(false);

      console.log('Submit');
      resetForm();
    },

    onChange: ({ birthDate }) => {
      console.log('birthDate', birthDate);
      setFieldValue('birthday', birthDate);
    },
  });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Birthday')}:</InfoProp>
        <FlatpickrStyled
          data-enable-time
          type="date"
          name="birthday"
          value={values['birthday']}
          // placeholder={user?.birthDate || '00.00.0000'}
          disabled={isDisabled || !isUpdating}
          options={{
            maxDate: 'today',
            enableTime: false,
            dateFormat: 'd.m.Y',
          }}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
