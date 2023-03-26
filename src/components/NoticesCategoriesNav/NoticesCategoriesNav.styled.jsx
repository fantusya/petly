import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';

export const NavBox = styled(Box)`
  // padding-top: ${p => p.theme.space[6]}px;

  // @media (min-width: ${p => p.theme.breakpoints[1]}) {
  //   display: flex;
  //   justify-content: space-between;
  // }
  margin-top: 28px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    align-items: center;
  }
`;

export const NavUl = styled.ul`
  // padding-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  justify-content: flex-start;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 75%;
  }
`;

// export const NavBtnWrapper = styled(Box)`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   gap: 12px;

//   @media (min-width: ${p => p.theme.breakpoints[1]}) {
//     width: 75%;
//   }
// `;

export const NavBtn = styled(NavLink)`
  display: inline-block;

  padding: ${p => p.theme.space[3]}px 28px;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.text};
  font-family: ${p => p.theme.fonts.textMedium};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-decoration: none;

  outline: none;
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  transition: background-color 250ms linear, color 250ms linear,
    border-color 250ms linear;

  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const AddButton = styled(Box)`
  border-radius: ${p => p.theme.radii.circular};;
  border-style: none;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  // transition: all 400ms ease 0s;

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
