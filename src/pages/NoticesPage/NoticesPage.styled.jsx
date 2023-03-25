import styled from 'styled-components';
import { Box } from 'components/Box/Box';

export const NoticesPageMain = styled(Box)`
  position: relative;
  margin-top: 30px;
  padding: 0 0 100px 0;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 60px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-bottom: 200px;
  }
`;

// export const NoticePageContainer = styled(Box)`
//   background-color: ${p => theme.colors.background};
// `;
