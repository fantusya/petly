import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchingData } from 'hooks';

import FriendsList from 'components/FriendsList';
import { useTranslation } from 'react-i18next';

import { Container } from 'globalStyles/globalStyle';
import { FriendsTitle } from './OurFriendsPage.styled';

export const OurFriendsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  // const { results, status } = useFetchingData('api/friends');
  const { results } = useFetchingData('api/friends');

  useEffect(() => {
    document.title = `Our friends`;
  }, [location]);

  return (
    <section>
      <Container>
        <FriendsTitle>{t('Our_friends')}</FriendsTitle>
        <FriendsList results={results} />
      </Container>
    </section>
  );
};

export default OurFriendsPage;
