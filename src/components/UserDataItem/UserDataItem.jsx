import { useState } from 'react';
import { InfoItem } from './UserDataItem.styled';
import UserName from './UserName';
import UserEmail from './UserEmail';

import UserPhone from './UserPhone';
import UserCity from './UserCity';
import { UserBirthday } from './UserBirthday';

export const UserDataItem = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleDisabled = () => setIsDisabled(state => !state);

  return (
    <>
      <InfoItem>
        <UserName onUpdate={toggleDisabled} isDisabled={isDisabled} />
      </InfoItem>

      <InfoItem>
        <UserEmail onUpdate={toggleDisabled} isDisabled={isDisabled} />
      </InfoItem>

      <InfoItem>
        <UserBirthday onUpdate={toggleDisabled} isDisabled={isDisabled} />
      </InfoItem>

      <InfoItem>
        <UserPhone onUpdate={toggleDisabled} isDisabled={isDisabled} />
      </InfoItem>

      <InfoItem>
        <UserCity onUpdate={toggleDisabled} isDisabled={isDisabled} />
      </InfoItem>
    </>
  );
};
export default UserDataItem;
