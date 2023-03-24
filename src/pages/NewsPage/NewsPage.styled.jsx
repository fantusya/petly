import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const NewsList = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
