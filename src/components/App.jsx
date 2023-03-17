import { Box } from './Box/Box';
import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';

import Example from './Example';

export const App = () => {
  return (
    <Box as="section" pt={5}>
      <Example />
      <FontStyles />
      <GlobalStyle />
    </Box>
  );
};
