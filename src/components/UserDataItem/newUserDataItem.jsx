import * as yup from 'yup';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { registerSchema } from '../../../../schemas/authValidationSchemas';
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
import { updateUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import { ReactComponent as EditSaveIcon } from 'images/userPage/editSaveIcon.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

export const NewUserDataItem = () => {
  const { t } = useTranslation();

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [startDate, setStartDate] = useState();

  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (currentUser.birthday) {
      const parts = currentUser.birthday.split('.');

      if (parts.length === 3) {
        const year = parseInt(parts[2]);
        const month = parseInt(parts[1] - 1);
        const day = parseInt(parts[0]);

        if (year === 0) setStartDate();
        else setStartDate(new Date(year, month, day));
      }
    }
  }, [currentUser.birthday]);

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
        if (field === 'birthday') setIsBirthdayDisabled(!isBirthdayDisabled);
        if (field === 'phone') setIsPhoneDisabled(!isPhoneDisabled);
        if (field === 'location') setIsCityDisabled(!isCityDisabled);
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
      updateUser({
        name: event.name,
        email: event.email,
        birthday: startDate.toLocaleString().slice(0, 10),
        phone: event.phone,
        location: event.location,
      })
    );
    console.log('onSubmit', {
      name: event.name,
      email: event.email,
      birthday: startDate.toLocaleString().slice(0, 10),
      phone: event.phone,
      location: event.location,
    });
  };

  return (
    <div>
      <DataInputWrapp>
        <Formik
          initialValues={{
            name: currentUser.name || i18n.t('New_User'),
            email: currentUser.email,
            birthday: currentUser.birthday || '00.00.0000',
            phone: currentUser.phone || '+380000000000',
            location: currentUser.location || i18n.t('City_region'),
          }}
          validationSchema={yup.object().shape({
            name: registerSchema.fields.name,
            email: registerSchema.fields.email,
            phone: registerSchema.fields.phone,
            location: registerSchema.fields.location,
          })}
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
                <LabelDatePicker htmlFor="birthday">
                  {t('Birthday')}:
                </LabelDatePicker>
                <InputDatePickerWrapp>
                  <InputDatePicker
                    selected={startDate}
                    openToDate={new Date(2000, 0, 1)}
                    active={!isBirthdayDisabled}
                    dateFormat="dd.MM.yyyy"
                    name="birthday"
                    placeholderText={'00.00.0000'}
                    disabled={isBirthdayDisabled}
                    onChange={date => setStartDate(date)}
                    minDate={new Date('01.01.1900')}
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    shouldCloseOnSelect={true}
                  />
                </InputDatePickerWrapp>
                {isBirthdayDisabled && (
                  <EditBtn
                    type="submit"
                    name="birthday"
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
                    onClick={e => onSubmitClick(e, 'birthday', errors)}
                    isDateEdit={true}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="phone">{t('Phone')}:</Label>
                <Input
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
                />
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
                <Label htmlFor="location">{t('City')}:</Label>
                <Input
                  type="text"
                  name="location"
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
                    onClick={e => onSubmitClick(e, 'location', errors)}
                  >
                    <EditSaveIcon width="20" height="20" />
                  </EditBtn>
                )}
              </InputWrapper>
              {touched.location && errors.location && (
                <ErrorMessage>{errors.location}</ErrorMessage>
              )}
            </Form>
          )}
        </Formik>
      </DataInputWrapp>
    </div>
  );
};
