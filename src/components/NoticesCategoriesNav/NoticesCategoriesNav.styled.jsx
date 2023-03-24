import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';

export const NavBox = styled(Box)`
  padding-top: ${p => p.theme.space[6]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavBtnWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 75%;
  }
`;

export const NavBtn = styled(NavLink)`
  display: inline-block;

  padding-left: 28px;
  padding-right: 28px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.text};
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  
  outline: none;
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  transition: background-color 250ms linear, color 250ms linear, border-color 250ms linear;

  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const AddButton = styled(Box)`
  @media (max-width: 767.9px) {
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 999;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    flex-shrink: 0;
    align-self: flex-start;
  }
`;



export const AddPetText = styled('p')`
  margin-right: 12px;
  font-size: ${p => p.theme.fontSizes[4]};
`;

