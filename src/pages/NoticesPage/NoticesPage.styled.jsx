import styled from 'styled-components';
import { Box } from 'components/Box/Box';

export const NoticesPageMain = styled(Box)`
position: relative;
  margin-top: 30px;
  padding: 0 0 100px 0;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 200px;
  }
`;


// export const NoticePageContainer = styled(Box)`
//   background-color: ${p => theme.colors.background};
// `;