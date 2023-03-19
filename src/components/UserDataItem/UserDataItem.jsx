import { InfoItem, InfoButton } from './UserDataItem.styled';

export const UserDataItem = () => {
  return (
    <>
      <InfoItem>
        <p>Name:</p>
        <label>
          Anna
          <input type="text" name="email"></input>
        </label>
        <InfoButton>{/* <svg></svg> */}</InfoButton>
      </InfoItem>
      <InfoItem>
        <p>Email:</p>
        <label>
          anna00@gmail.com
          <input type="email" name="email"></input>
        </label>
        <InfoButton>{/* <svg></svg> */}</InfoButton>
      </InfoItem>
    </>
  );
};

export default UserDataItem;
