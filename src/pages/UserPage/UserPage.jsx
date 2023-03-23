import { Helmet } from 'react-helmet';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import { Box } from 'components/Box/Box';

export const UserPage = () => {
  return (
    <Box display={['block', 'block', ' block', 'flex']}>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <UserData />
      <PetsData />
    </Box>
  );
};

export default UserPage;
