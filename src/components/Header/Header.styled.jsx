import styled from 'styled-components';

export const HeaderElement = styled.header`
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 0;
  position: fixed;
  // z-index: 10;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 24px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 20px;
  }
`;
