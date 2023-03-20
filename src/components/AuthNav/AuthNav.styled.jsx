import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavWrapp = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.text};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: black;
  padding: 8px 28px;
  border: 2px solid #f59256;
  border-radius: 40px;
  line-height: 1.35;
  transition: all 0.3s linear;
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;
