import UserPhoto from 'components/UserData/UserPhoto';
import {
  UserWrapper,
  TitleContainer,
  Title,
  UserSection,
  UserContainer,
  UserDataList,
  UserThumb,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem';
import Logout from 'components/Logout';

export const UserData = () => {
  return (
    <UserWrapper>
      <TitleContainer>
        <Title>My information:</Title>
      </TitleContainer>

      <UserContainer>
        <UserSection>
          <UserPhoto />

          <UserThumb>
            <UserDataList>
              <UserDataItem />
            </UserDataList>

            <Logout />
          </UserThumb>
        </UserSection>
      </UserContainer>
    </UserWrapper>
  );
};

export default UserData;
