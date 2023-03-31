import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import { emailValidationSchema } from 'helpers/validationSchemas/userValidationSchema';
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

export const UserEmail = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: user?.email,
      },
      validationSchema: emailValidationSchema,
      onSubmit: ({ email }, { resetForm }) => {
        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          return;
        }

        if (email === user.email) {
          onUpdate();
          setIsUpdating(false);

          resetForm();
          return;
        }

        dispatch(updateInfo({ email }));

        onUpdate();
        setIsUpdating(false);

        resetForm();
      },
    });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Email')}:</InfoProp>
        <InfoInput
          type="email"
          name="email"
          value={values.email}
          placeholder={user?.email}
          disabled={isDisabled || !isUpdating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <Error>{errors.email}</Error>}
      </InfoField>
      <InfoButton type="submit" disabled={!isDisabled && !isUpdating}>
        {isUpdating ? <Check /> : <Pensil />}
      </InfoButton>
    </InfoForm>
  );
};

export default UserEmail;

UserEmail.propsType = {
  onUpdate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
