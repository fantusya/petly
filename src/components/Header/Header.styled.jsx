import styled from 'styled-components';

export const HeaderElement = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  top: 0;
  /* padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 0;  */
  /* position: fixed; */
  // z-index: 10;
  background-color: ${p => p.theme.colors.background};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 24px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 20px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// // export const BurgerBtn = styled.button`

// //   margin: ${p => p.theme.space[0]}px;
// //   padding: ${p => p.theme.space[0]}px;

// //   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

// //   background-color: ${p => p.theme.colors.transparent};

// `;
