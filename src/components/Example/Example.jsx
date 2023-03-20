import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
// import { Title } from './Example.styled';

export const Example = () => {
  return (
    <Box as="section" pt={5}>
      <Container>
        {/* <Title>Here will be a nice web-page:)</Title> */}
      </Container>
    </Box>
  );
};

export default Example;
