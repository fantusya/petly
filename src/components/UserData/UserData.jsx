import { Container } from 'globalStyles/globalStyle';
import { UserText, Section, Avatar } from './UserData.styled';

export const UserData = () => {
  return (
    <Container>
      <UserText>My information:</UserText>

      <Section>
        <Avatar></Avatar>
      </Section>
    </Container>
  );
};

export default UserData;
