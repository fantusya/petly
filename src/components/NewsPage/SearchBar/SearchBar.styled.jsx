import { ReactComponent as searchIcon } from 'images/svg/searchIcon.svg';

import { ReactComponent as Clear } from 'images/svg/clear.svg';

import { theme } from 'globalStyles/theme';

import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  width: 280px;
  height: 40px;
  margin: 0 auto;

  box-shadow: ${p => p.theme.shadows.section};
  border-radius: ${p => p.theme.radii.small};

  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 608px;
    height: 44px;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  // width: 57px;
  // height: 22px;

  width: 100%;
  height: 100%;
  padding-left: 9px;

  display: flex;
  align-items: center;

  border: ${p => p.theme.borders.none};
    outline: none;

    border-radius: ${p => p.theme.radii.small};

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.inputTxt};
  line-height: ${p => p.theme.lineHeights.text};}
  letter-spacing: ${p => p.theme.letterSpacing.text};

      &:focus {
    border-color: #333;
     border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ResetIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SearchIcon = styled(searchIcon)`
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[1]};

  transition: ${theme.transition.main};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

export const ResetIcon = styled(Clear)`
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[1]};

  transition: ${theme.transition.main};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;
