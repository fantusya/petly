// import { useSearchParams } from 'react-router-dom';
// import { token } from 'api/baseSettings';
// import { Helmet } from 'react-helmet';
import UserData from 'components/UserData';
import PetsData from 'components/PetsData';
import { Box } from 'components/Box/Box';

export const UserPage = () => {
  // const [searchParams] = useSearchParams();
  // const accessToken = searchParams.get('accessToken');
  // const refreshToken = searchParams.get('refreshToken');

  // useEffect(() => {
  //   if (accessToken && refreshToken) {
  //     token.set(accessToken);
  //     localStorage.setItem('refreshToken', refreshToken);
  //   }
  // }, [accessToken, refreshToken]);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Box
      display={['block', 'block', ' block', 'flex']}
      pt={['58px', '58px', '72px', '68px']}
    >
      {/* <Helmet> */}
      <title>Profile</title>
      {/* </Helmet> */}

      <UserData />
      <PetsData />
    </Box>
  );
};

export default UserPage;
