import { useFetchingData } from 'hooks';

import FriendsList from 'components/FriendsList';

import { Container } from 'globalStyles/globalStyle';
import { FriendsTitle } from './OurFriendsPage.styled';

export const OurFriendsPage = () => {
  // const { results, status } = useFetchingData('api/friends');
  const { results } = useFetchingData('api/friends');

  return (
    <section>
      <Container>
        <FriendsTitle>Our friends</FriendsTitle>
        <FriendsList results={results} />
      </Container>
    </section>
  );
};

export default OurFriendsPage;
