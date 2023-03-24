import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as Icon } from 'images/svg/addCard.svg';

export const PetsWrapper = styled.section`
  padding-top: 46px;
  padding-bottom: 80px;
  /* @media (min-width: ${theme.breakpoints[2]}) {
    flex: 0 0 70%;
    transform: translate(-100%, 0px);
  } */
`;

export const Title = styled.h2`
  display: inline;

  color: ${p => p.theme.colors.black};

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.space[5] + 8}px;
  height: ${p => p.theme.space[5] + 8}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.circular};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  cursor: pointer;
`;

export const AddIcon = styled(Icon)`
  fill: currentColor;
`;
