import styled from 'styled-components';
import { Box } from 'components/Box/Box';

export const Backdrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  width: 100vw;
  height: 100%;
  padding-top: 50px;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  font-family: ${p => p.theme.fonts.text};
`;
