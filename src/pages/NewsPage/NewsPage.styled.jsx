import styled from 'styled-components';

export const NewsList = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 40px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-top: 60px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
