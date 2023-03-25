import UserPhoto from 'components/UserData/UserPhoto';
import { Box } from 'components/Box/Box';
import {
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
    <Box pt={['61px', '61px', '88px', '58px']} flex="0 0 100%" as="section">
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
    </Box>
  );
};

export default UserData;
