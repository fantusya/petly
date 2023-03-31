import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import { nameValidationSchema } from 'helpers/validationSchemas/userValidationSchema';
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

export const UserName = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { t } = useTranslation();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: user?.name,
      },
      validationSchema: nameValidationSchema,
      onSubmit: ({ name }, { resetForm }) => {
        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          return;
        }

        if (name === user.name) {
          onUpdate();
          setIsUpdating(false);

          resetForm();
          return;
        }

        dispatch(updateInfo({ name }));

        onUpdate();
        setIsUpdating(false);

        resetForm();
      },
    });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>{t('Name')}:</InfoProp>
        <InfoInput
          type="text"
          name="name"
          value={values.name}
          placeholder={user?.name}
          disabled={isDisabled || !isUpdating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <Error>{errors.name}</Error>}
      </InfoField>
      <InfoButton type="submit" disabled={!isDisabled && !isUpdating}>
        {isUpdating ? <Check /> : <Pensil />}
      </InfoButton>
    </InfoForm>
  );
};

export default UserName;

UserName.propsType = {
  onUpdate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
