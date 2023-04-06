import { Box } from 'components/Box/Box';
import { RotatingTriangles } from 'react-loader-spinner';
import { theme } from 'globalStyles/theme';

const LoadingWindow = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      background="linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)"
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
        colors={[
          theme.colors.text,
          theme.colors.background,
          theme.colors.accentBtn,
        ]}
      />
    </Box>
  );
};

export default LoadingWindow;
