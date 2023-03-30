// import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
// import { registerSchema } from '../../../../schemas/authValidationSchemas';
import {
  DataInputWrapp,
  Label,
  LabelDatePicker,
  Input,
  InputDatePicker,
  InputDatePickerWrapp,
  InputWrapper,
  EditBtn,
  ErrorMessage,
  IconPen,
} from './NewUserDataItem.styled';
import { updateInfo } from '../../redux/auth/operations';
// import { selectUser } from '../../redux/auth/selectors';

import { ReactComponent as EditSaveIcon } from '../../images/svg/save.svg';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks';

const UserDataItem = () => {
  const { t } = useTranslation();

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  // const [startDate, setStartDate] = useState();

  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  const dispatch = useDispatch();
  const { user } = useAuth();

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  const onSubmitClick = useCallback(
    (event, field, errors) => {
      if (errors && Object.keys(errors).length) return;
      setTimeout(() => {
        if (field === 'name') setIsNameDisabled(!isNameDisabled);
        if (field === 'email') setIsEmailDisabled(!isEmailDisabled);
        if (field === 'birthDate') setIsBirthdayDisabled(!isBirthdayDisabled);
        if (field === 'phone') setIsPhoneDisabled(!isPhoneDisabled);
        if (field === 'city') setIsCityDisabled(!isCityDisabled);
      }, 0);

      return true;
    },
    [
      isNameDisabled,
      isEmailDisabled,
      isBirthdayDisabled,
      isPhoneDisabled,
      isCityDisabled,
    ]
  );

  const onSubmit = event => {
    dispatch(
      updateInfo({
        name: event.name,
        email: event.email,
        birthDate: event.birthDate,
        phone: event.phone,
        city: event.city,
      })
    );
  };

  return (
    <div>
      <DataInputWrapp>
        <Formik
          initialValues={{
            name: user.name || 'New User',
            email: user.email,
            birthDate: user.birthDate || '00.00.0000',
            phone: user.phone || '+380000000000',
            city: user.city || 'City, Region',
          }}
          // validationSchema={yup.object().shape({
          //   name: registerSchema.fields.name,
          //   email: registerSchema.fields.email,
          //   phone: registerSchema.fields.phone,
          //   location: registerSchema.fields.location,
          // })}
          onSubmit={event => onSubmit(event)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <InputWrapper>
                <Label htmlFor="name">{t('Name')}:</Label>
                <Input
                  type="text"
                  name="name"
                  disabled={isNameDisabled}
                  onChange={e => {
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  isactive={isNameDisabled ? 0 : 1}
                  style={{
                    border: `${
                      isNameDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isNameDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isNameDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    className={isAnyEditing ? '' : 'btn-active'}
                    onClick={() => setIsNameDisabled(!isNameDisabled)}
                  >
                    <IconPen
                      fill={isAnyEditing ? iconColorDisabled : undefined}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isNameDisabled && (
                  <EditBtn
                    type="submit"
                    className="btn-active"
                    onClick={e => {
                      onSubmitClick(e, 'name', errors);
                    }}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.name && errors.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}

              <InputWrapper>
                <Label htmlFor="email">{t('Email')}:</Label>
                <Input
                  type="text"
                  name="email"
                  disabled={isEmailDisabled}
                  onChange={e => {
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  isactive={isEmailDisabled ? 0 : 1}
                  style={{
                    border: `${
                      isEmailDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isEmailDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isEmailDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    onClick={() => setIsEmailDisabled(!isEmailDisabled)}
                    className={isAnyEditing ? '' : 'btn-active'}
                  >
                    <IconPen
                      fill={isAnyEditing ? iconColorDisabled : undefined}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isEmailDisabled && (
                  <EditBtn
                    type="submit"
                    className="btn-active"
                    onClick={e => onSubmitClick(e, 'email', errors)}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <InputWrapper>
                <LabelDatePicker htmlFor="birthDate">
                  {t('birthDate')}:
                </LabelDatePicker>
                <InputDatePickerWrapp>
                  <InputDatePicker
                    selected={new Date(user?.birthDate)}
                    openToDate={new Date(1993, 0, 1)}
                    active={!isBirthdayDisabled}
                    dateFormat="dd.MM.yyyy"
                    name="birthDate"
                    placeholderText={'00.00.0000'}
                    disabled={isBirthdayDisabled}
                    onChange={date => {
                      setFieldValue('birthDate', date);
                      // setStartDate(date);
                    }}
                    minDate={new Date('01.01.1900')}
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    shouldCloseOnSelect={true}
                  />
                </InputDatePickerWrapp>
                {isBirthdayDisabled && (
                  <EditBtn
                    type="submit"
                    name="birthDate"
                    onClick={() => setIsBirthdayDisabled(!isBirthdayDisabled)}
                    disabled={isAnyEditing}
                    className={isAnyEditing ? '' : 'btn-active'}
                    isDateEdit={true}
                  >
                    <IconPen
                      fill={isAnyEditing ? iconColorDisabled : undefined}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isBirthdayDisabled && (
                  <EditBtn
                    type="submit"
                    className="btn-active"
                    onClick={e => onSubmitClick(e, 'birthDate', errors)}
                    isDateEdit={true}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>

              <InputWrapper>
                {/* <Label htmlFor="phone">{t('Phone')}:</Label> */}
                <PhoneInput
                  // name="phone"
                  type="tel"
                  disabled={isPhoneDisabled}
                  // className={css}
                  onlyCountries={['ua']}
                  country={'ua'}
                  countryCodeEditable={false}
                  // defaultCountry={'ua'}
                  errors={errors}
                  value={user?.phone}
                  onChange={phone => {
                    console.log('phone', `+${phone}`);

                    setFieldValue('phone', `+${phone}`);
                  }}
                />

                {/* <Input
                  type="text"
                  name="phone"
                  disabled={isPhoneDisabled}
                  onChange={e => {
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  isactive={isPhoneDisabled ? 0 : 1}
                  style={{
                    border: `${
                      isPhoneDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isPhoneDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                /> */}
                {isPhoneDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    className={isAnyEditing ? '' : 'btn-active'}
                    onClick={() => setIsPhoneDisabled(!isPhoneDisabled)}
                  >
                    <IconPen
                      fill={isAnyEditing ? iconColorDisabled : undefined}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isPhoneDisabled && (
                  <EditBtn
                    type="submit"
                    className="btn-active"
                    onClick={e => onSubmitClick(e, 'phone', errors)}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.phone && errors.phone && (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              )}

              <InputWrapper>
                <Label htmlFor="city">{t('City')}:</Label>
                <Input
                  type="text"
                  name="city"
                  disabled={isCityDisabled}
                  onChange={e => {
                    setFieldValue(e.target.name, e.target.value);
                  }}
                  isactive={isCityDisabled ? 0 : 1}
                  style={{
                    border: `${
                      isCityDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isCityDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                />
                {isCityDisabled && (
                  <EditBtn
                    type="submit"
                    disabled={isAnyEditing}
                    className={isAnyEditing ? '' : 'btn-active'}
                    onClick={() => setIsCityDisabled(!isCityDisabled)}
                  >
                    <IconPen
                      fill={isAnyEditing ? iconColorDisabled : undefined}
                      width="20"
                      height="20"
                    />
                  </EditBtn>
                )}
                {!isCityDisabled && (
                  <EditBtn
                    type="submit"
                    className="btn-active"
                    onClick={e => onSubmitClick(e, 'city', errors)}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.city && errors.city && (
                <ErrorMessage>{errors.city}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>
      </DataInputWrapp>
    </div>
  );
};

export default UserDataItem;
