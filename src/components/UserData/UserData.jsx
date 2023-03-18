import { Container } from 'globalStyles/globalStyle';
import { UserText, Section, Avatar, EditPhotoButton } from './UserData.styled';

export const UserData = () => {
  return (
    <Container>
      <UserText>My information:</UserText>

      <Section>
        <Avatar></Avatar>
        <EditPhotoButton>Edit photo</EditPhotoButton>
      </Section>
    </Container>
  );
};

export default UserData;
