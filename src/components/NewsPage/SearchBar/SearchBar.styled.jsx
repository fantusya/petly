import { FaTimesCircle } from 'react-icons/fa';
import { ReactComponent as SearchSvg } from 'images/svg/searchIcon.svg';

import { theme } from 'globalStyles/theme';
// import { Container } from 'globalStyles/globalStyle';

import styled from 'styled-components';

export const SearchBarForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  width: 280px;
  height: 40px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 608px;
    height: 44px;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  padding: 9px 12px;
  // width: 57px;
  // height: 22px;

  width: 100%;
  padding-left: 9px;

  display: flex;
  align-items: center;

  box-shadow: ${p => p.theme.shadows.section};
  border-radius: ${p => p.theme.radii.small};
  border: ${p => p.theme.borders.none};
  outline: none;

  color: ${p => p.theme.colors.white};

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.inputTxt};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  &::placeholder {
    color: ${p => p.theme.colors.inputTxt};
  }

  &:focus {
    color: ${p => p.theme.colors.inputTxt};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    padding: 9px 20px;
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const SearchButton = styled.button`
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.white};

  border: ${p => p.theme.borders.none};
  cursor: pointer;

  outline: none;
  border-radius: ${p => p.theme.radii.circular};

  transition: ${theme.transition.main};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const SearchIconContainer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 24px;
    height: 24px;
  }
`;

export const ResetIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SearchIcon = styled(SearchSvg)`
  display: inline-block;
  width: 100%;
  height: 100%;

  color: ${p => p.theme.colors.text};

  transition: ${theme.transition.main};

  &:hover {
    color: green;
  }
`;

export const ResetIcon = styled(FaTimesCircle)`
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[1]};

  transition: ${theme.transition.main};

  &:hover {
    color: red;
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;
