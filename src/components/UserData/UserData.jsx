// import { Container } from 'globalStyles/globalStyle';
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
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem';
import Logout from 'components/Logout';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserData = () => {
  return (
    <Box pt={['61px', '61px', '88px']} as="section">
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

          <div>
            <UserDataList>
              <UserDataItem></UserDataItem>
            </UserDataList>

            <Logout />
          </div>
        </UserSection>
      </UserContainer>
    </Box>
  );
};

export default UserData;
