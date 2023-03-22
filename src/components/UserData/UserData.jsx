import { Box } from 'components/Box/Box';
import {
  TitleContainer,
  Title,
  UserSection,
  UserContainer,
  UserPhoto,
  UserPhotoButton,
  UserDataList,
  Kamera,
  UserThumb,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem';
import Logout from 'components/Logout';
import { ReactComponent as AvatarPlus } from 'images/svg/avatar_plus.svg';

export const UserData = () => {
  return (
    <Box pt={['61px', '61px', '88px', '58px']} flex="0 0 100%" as="section">
      <TitleContainer>
        <Title>My information:</Title>
      </TitleContainer>

      <UserContainer>
        <UserSection>
          <div>
            <UserPhoto>
              <AvatarPlus />
            </UserPhoto>
            <UserPhotoButton>
              <Kamera />
              <span>Edit photo</span>
            </UserPhotoButton>
          </div>

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
