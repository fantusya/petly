import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 164px;
  font-family: ${p => p.theme.fonts.text};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: white;
  padding: 8px 37px;
  border: 2px solid #f59256;
  border-radius: 40px;
  line-height: 1.35;
  background-color: ${p => p.theme.colors.accent};
  transition: all 0.3s linear;
  &:hover {
    background-color: ${p => p.theme.colors.focus};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.focus};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.35;
    font-size: 16px;
    margin-right: 50px;
    backgaround-color: ${p => p.theme.colors.accent};
    // margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
    justify-content: flex-end;
  }
`;

export const AvatarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
