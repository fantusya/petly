import { useFetchingData } from 'hooks';

import FriendsList from 'components/FriendsList';

import { Container } from 'globalStyles/globalStyle';

export const OurFriendsPage = () => {
  const { results, status } = useFetchingData('api/friends');

  return (
    <section>
      <Container>
        <h1>Our friends</h1>
        <FriendsList results={results} />
      </Container>
    </section>
  );
};

export default OurFriendsPage;
