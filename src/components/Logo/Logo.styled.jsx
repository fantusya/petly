import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img`
  width: 82px;

  // @media (min-width: ${p => p.theme.breakpoints[1]}) {
  //     width: 94px;
  // }

  // @media (min-width: ${p => p.theme.breakpoints[2]}) {
  //     width: 94px;
  // }
`;

export const HomeLink = styled(NavLink)`
  //  z-index: 100e

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: auto;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-rigth: 80px;
  }
`;
