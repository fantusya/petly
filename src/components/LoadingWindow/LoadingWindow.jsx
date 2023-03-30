import { Box } from 'components/Box/Box';
import { RotatingTriangles } from 'react-loader-spinner';

const LoadingWindow = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      background="linear-gradient(to right, #f46b45, #eea849)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <RotatingTriangles
        visible={true}
        height="120"
        width="120"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={['#241d1d', '#f5cd56', '#ff4073']}
      />
    </Box>
  );
};

export default LoadingWindow;
