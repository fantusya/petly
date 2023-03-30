import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;

  //   justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[7]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  text-decoration: none;

  color: ${p => p.theme.colors.secondaryText};

  transition: ${p => p.theme.transition.main};

  &.active {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.accent};
    text-decoration-line: underline;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[9]};
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
    line-height: ${p => p.theme.lineHeights.text};
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 10px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
