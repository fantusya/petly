import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import { Box } from 'components/Box/Box';

export const UserPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Profile`;
  }, [location]);

  return (
    <Box
      display={[null, null, null, 'flex']}
      pt={['58px', '58px', '72px', '68px']}
      pr={[null, null, null, 'max(16px, calc((100% - 1248px) / 2))']}
      gridGap={[null, null, null, '32px']}
    >
      <UserData />
      <PetsData />
    </Box>
  );
};

export default UserPage;
