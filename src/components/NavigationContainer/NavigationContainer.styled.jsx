import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  //   width: ${p => (p.header ? '100%' : p.theme.breakpoints[0])};
  align-items: center;
  padding-left: 20px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // width: ${p => (p.header ? '100%' : p.theme.breakpoints[1])};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    // width: 1280px;
    // width: ${p => (p.header ? '100%' : p.theme.breakpoints[2])};
    padding-left: 16px;
    padding-right: 16px;
  }
`;
