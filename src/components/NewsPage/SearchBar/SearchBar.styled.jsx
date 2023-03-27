import { ReactComponent as SearchSvg } from 'images/svg/searchIcon.svg';
import { ReactComponent as ClearSvg } from 'images/svg/clear.svg';
import styled from 'styled-components';

export const SearchBarForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  width: 280px;
  height: 40px;
  margin: 0 auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
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
  height: 100%;
  padding-left: 9px;

  display: flex;
  align-items: center;

  box-shadow: ${p => p.theme.shadows.section};
  border-radius: ${p => p.theme.radii.small};
  border: ${p => p.theme.borders.none};
  outline: none;

  color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.small};

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.inputTxt};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  &:focus {
    border-color: #333;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  &::placeholder {
    color: ${p => p.theme.colors.inputTxt};
  }

  &:focus {
    color: ${p => p.theme.colors.inputTxt};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 9px 20px;

    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const SearchIconContainer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 24px;
    height: 24px;
  }
`;

export const ResetIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SearchIcon = styled(SearchSvg)`
  display: inline-block;
  width: 100%;
  height: 100%;

  color: ${p => p.theme.colors.text};

  transition: ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
  &:hover,
  &:focus {
    color: green;
  }
`;

export const ResetIcon = styled(ClearSvg)`
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[1]};

  transition: ${p => p.theme.transition.main};

  &:hover {
    color: red;
  }
`;
