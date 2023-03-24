import styled from 'styled-components';
import { ReactComponent as Plus } from 'images/svg/addCard.svg';

export const AddLinkCircle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.circular};
  border: ${p => p.theme.borders.none};
  box-shadow: ${p => p.theme.shadows.section};
  background-color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
  transition: color ${p => p.theme.transition.main};
  cursor: pointer;
  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.accentBtn};
    transition: background-color ${p => p.theme.transition.main};
  }
`;

export const AddLinkBasic = styled.a`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.35;
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  :hover,
  :focus-visible {
    div {
      background-color: ${p => p.theme.colors.accentBtn};
      transition: background-color ${p => p.theme.transition.main};
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${p => p.theme.radii.circular};
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.accent};
    transition: background-color ${p => p.theme.transition.main};
  }
`;

export const AddCardIcon = styled(Plus)`
  width: 32px;
  height: 32px;

  color: ${p => p.theme.transition.white}
`;