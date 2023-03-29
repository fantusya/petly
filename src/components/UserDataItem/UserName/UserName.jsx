import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';
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

const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Name is required'),
});

export const UserName = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { t } = useTranslation();
  const { user } = useAuth();
  const dispatch = useDispatch();

  console.log(user, 'user');

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: user?.name,
      },
      validationSchema: basicSchema,
      onSubmit: ({ name }, { resetForm }) => {
        console.log(name);

        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          console.log('Not submit');
          return;
        }

        dispatch(updateInfo(name));

        onUpdate();
        setIsUpdating(false);

        console.log('Submit');
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
