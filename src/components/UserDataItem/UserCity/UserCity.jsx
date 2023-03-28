import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateInfo } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
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
  city: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('City is required'),
});

export const UserCity = ({ onUpdate, isDisabled }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();

  console.log(user, 'user');

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        city: user?.city || 'City',
      },
      validationSchema: basicSchema,
      onSubmit: ({ city }, { resetForm }) => {
        console.log(city);

        if (isDisabled) {
          onUpdate();
          setIsUpdating(true);
          console.log('Not submit');
          return;
        }

        dispatch(updateInfo(city));

        onUpdate();
        setIsUpdating(false);

        console.log('Submit');
        resetForm();
      },
    });

  return (
    <InfoForm onSubmit={handleSubmit}>
      <InfoField>
        <InfoProp>City:</InfoProp>
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
