import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { jelloHorizontal } from 'keyframes';

export const LogoText = styled.div`
  width: 82px;
  display: block;

  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes[7]};
  color: ${p => p.theme.colors.black};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 94px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 94px;
    margin-right: 80px;
  }
`;

export const LogoSpan = styled.span`
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes[7]};
  color: ${p => p.theme.colors.accent};
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  //  z-index: 100;

  &:hover,
  &:focus {
    animation: ${jelloHorizontal} 0.9s both;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: auto;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-rigth: 80px;
  }
`;
