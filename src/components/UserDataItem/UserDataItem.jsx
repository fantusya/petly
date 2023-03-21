import {
  InfoItem,
  InfoForm,
  InfoField,
  InfoProp,
  InfoInput,
  InfoButton,
  Pensil,
} from './UserDataItem.styled';

export const UserDataItem = () => {
  return (
    <>
      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Name:</InfoProp>
            <InfoInput type="text" name="name" placeholder="Anna" />
          </InfoField>
          <InfoButton type="submit">
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Email:</InfoProp>
            <InfoInput
              type="email"
              name="email"
              placeholder="anna00@gmail.com"
            />
          </InfoField>
          <InfoButton type="submit">
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Birthday:</InfoProp>
            <InfoInput type="text" name="birthday" placeholder="00.00.0000" />
          </InfoField>
          <InfoButton type="submit">
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>Phone:</InfoProp>
            <InfoInput type="tel" name="phone" placeholder="+38000000000" />
          </InfoField>
          <InfoButton type="submit">
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>

      <InfoItem>
        <InfoForm>
          <InfoField>
            <InfoProp>City:</InfoProp>
            <InfoInput type="text" name="city" placeholder="Kiev" />
          </InfoField>
          <InfoButton type="submit">
            <Pensil />
          </InfoButton>
        </InfoForm>
      </InfoItem>
    </>
  );
};

export default UserDataItem;
