import { Container } from 'globalStyles/globalStyle';
import { UserText } from './UserData.styled';

export const UserData = () => {
  return (
    <Container>
      <UserText>My information:</UserText>

      <div>Here will be a section</div>
    </Container>
  );
};

export default UserData;
