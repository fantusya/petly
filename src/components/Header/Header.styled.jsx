import styled from 'styled-components';

export const HeaderElement = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  top: 0;
  width: 100%;
  /* padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 0;  */
  position: fixed;

  // z-index: 10;
  background-color: ${p => p.theme.colors.background};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 24px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 20px;
  }
`;
