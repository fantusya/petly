// import { useSearchParams } from 'react-router-dom';
// import { token } from 'api/baseSettings';
// import { Helmet } from 'react-helmet';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import { Box } from 'components/Box/Box';

export const UserPage = () => {
  return (
    <Box
      display={['block', 'block', ' block', 'flex']}
      pt={['58px', '58px', '72px', '68px']}
      pr={[0, 0, 0, 'max(16px, calc((100% - 1248px) / 2))']}
      gridGap="32px"
    >
      {/* <Helmet> */}
      {/* <title>Profile</title> */}
      {/* </Helmet> */}

      <UserData />
      <PetsData />
    </Box>
  );
};

export default UserPage;
