import styled from 'styled-components';

export const NoticesCardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  cursor: ${p => (p.isLoading ? 'wait' : 'default')};
`;

export const EmptyArray = styled.img`
  display: block;
  /* text-align: center; */
  margin: 0 auto;
  width: 250px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 400px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 500px;
  }
`;
