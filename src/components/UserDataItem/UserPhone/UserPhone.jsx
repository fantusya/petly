import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import { phoneValidationSchema } from 'helpers/validationSchemas/userValidationSchema';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  InfoForm,
  InfoField,
  InfoProp,
  InfoInput,
  InfoButton,
  Pensil,
  Check,
  Error,
} from '../UserDataItem.styled';

export const UserPhone = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        phone: user?.phone,
      },
      validationSchema: phoneValidationSchema,
      onSubmit: ({ phone }, { resetForm }) => {
        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          return;
        }

        if (phone === user.phone) {
          onUpdate();
          setIsUpdating(false);

          resetForm();
          return;
        }

        dispatch(updateInfo({ phone }));

        onUpdate();
        setIsUpdating(false);

        resetForm();
      },
    });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Phone')}:</InfoProp>
        <InfoInput
          type="tel"
          name="phone"
          value={values.phone}
          placeholder={user?.phone}
          disabled={isDisabled || !isUpdating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
      </InfoField>
      <InfoButton type="submit" disabled={!isDisabled && !isUpdating}>
        {isUpdating ? <Check /> : <Pensil />}
      </InfoButton>
    </InfoForm>
  );
};

export default UserPhone;

UserPhone.propsType = {
  onUpdate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
