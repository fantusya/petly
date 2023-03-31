import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import { cityValidationSchema } from 'helpers/validationSchemas/userValidationSchema';
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

export const UserCity = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        city: user?.city,
      },
      validationSchema: cityValidationSchema,
      onSubmit: ({ city }, { resetForm }) => {
        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          return;
        }

        if (city === user.city) {
          onUpdate();
          setIsUpdating(false);

          resetForm();
          return;
        }

        dispatch(updateInfo({ city }));

        onUpdate();
        setIsUpdating(false);

        resetForm();
      },
    });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('City')}:</InfoProp>
        <InfoInput
          type="text"
          name="city"
          value={values.city}
          placeholder={user?.city}
          disabled={isDisabled || !isUpdating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.city && touched.city && <Error>{errors.city}</Error>}
      </InfoField>
      <InfoButton type="submit" disabled={!isDisabled && !isUpdating}>
        {isUpdating ? <Check /> : <Pensil />}
      </InfoButton>
    </InfoForm>
  );
};

export default UserCity;

UserCity.propsType = {
  onUpdate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
