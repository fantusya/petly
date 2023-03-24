import React, { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import {
  InfoItem,
  InfoForm,
  InfoField,
  InfoProp,
  InfoInput,
  InfoButton,
  Pensil,
  Check,
} from './UserDataItem.styled';

export const UserDataItem = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const { user } = useAuth();

  console.log(user, 'user');
  console.log(isDisabled, 'isDisabled');
  console.log(isUpdating, 'isUpdating');

  const handleClick = () => {
    console.log('First click');
    setIsDisabled(false);
    setIsUpdating(true);
    console.log(isDisabled, 'isDisabled');
    console.log(isUpdating, 'isUpdating');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isDisabled) {
      return;
    }
    console.log('Submit');
  };

  const { name, email, birthDate, phone, city } = user;
  return (
    <>
      <InfoItem>
        <InfoForm onSubmit={handleSubmit}>
          <InfoField>
            <InfoProp>Name:</InfoProp>
            <InfoInput
              type="text"
              name="name"
              value={name || ''}
              placeholder="Anna"
              disabled={isDisabled}
            />
          </InfoField>
          <InfoButton
            type="submit"
            onClick={handleClick}
            disabled={isUpdating && isDisabled}
          >
            {isUpdating ? <Check /> : <Pensil />}
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm onSubmit={handleSubmit}>
          <InfoField>
            <InfoProp>Email:</InfoProp>
            <InfoInput
              type="email"
              name="email"
              value={email || ''}
              placeholder="anna00@gmail.com"
              disabled={isDisabled || isUpdating}
            />
          </InfoField>
          <InfoButton type="submit" onClick={handleClick} disabled={isUpdating}>
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Birthday:</InfoProp>
            <InfoInput
              type="text"
              name="birthday"
              value={birthDate || ''}
              placeholder="00.00.0000"
              disabled={isDisabled || isUpdating}
            />
          </InfoField>
          <InfoButton type="submit" onClick={handleClick} disabled={isUpdating}>
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Phone:</InfoProp>
            <InfoInput
              type="tel"
              name="phone"
              value={phone || ''}
              placeholder={'+38000000000'}
              disabled={isDisabled || isUpdating}
            />
          </InfoField>
          <InfoButton type="submit" onClick={handleClick} disabled={isUpdating}>
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>City:</InfoProp>
            <InfoInput
              type="text"
              name="city"
              value={city || ''}
              placeholder="Kiev"
              disabled={isDisabled || isUpdating}
            />
          </InfoField>
          <InfoButton type="submit" onClick={handleClick} disabled={isUpdating}>
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>
    </>
  );
};
