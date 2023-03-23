import { useFetchingData } from 'hooks';

import FriendsList from 'components/FriendsList';
import { FriendContainer } from './OurFriendsPage.styled';
export const OurFriendsPage = () => {
  const { results, status } = useFetchingData('api/friends');

  return (
    <FriendContainer>
      <h1>Our friends</h1>
      <FriendsList results={results} status={status} />
    </FriendContainer>
  );
};

export default OurFriendsPage;
