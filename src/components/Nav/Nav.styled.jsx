import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.text};
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  font-size: 32px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.37;
  color: #181c27;
  transition: ${p => p.theme.transition.main};
  &.active {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: #f59256;
    text-decoration-line: underline;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f59256;
  }
`;
