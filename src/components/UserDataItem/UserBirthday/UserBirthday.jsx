import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
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

export const UserBirthday = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { values, errors, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      birthDate: user?.birthDate || '00.00.0000',
    },
    onSubmit: ({ birthDate }, { resetForm }) => {
      console.log(birthDate);

      if (isDisabled) {
        onUpdate();
        setIsUpdating(true);
        console.log('Change input');
        return;
      }

      if (birthDate === user.birthday) {
        return;
      }

      dispatch(updateInfo({ birthDate }));

      onUpdate();
      setIsUpdating(false);

      console.log('Submit');
      resetForm();
    },
  });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Birthday')}:</InfoProp>
        <FlatpickrStyled
          data-enable-time
          value={values.birthDate}
          placeholder="00.00.0000"
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
