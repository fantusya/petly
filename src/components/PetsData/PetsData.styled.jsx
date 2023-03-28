import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as Icon } from 'images/svg/addCard.svg';
import { Container } from 'globalStyles/globalStyle';

export const PetsWrapper = styled.section`
  padding-top: ${p => p.theme.space[5] + 14}px;
  padding-bottom: ${p => p.theme.space[6] + 16}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: ${p => p.theme.space[4] + 4}px;
    padding-bottom: ${p => p.theme.space[7] - 28}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    flex-shrink: 0;
    width: 821px;
    padding-top: ${p => p.theme.space[6] - 6}px;
    // padding-bottom: ${p => p.theme.space[5] + 8}px;
    // padding-left: ${p => p.theme.space[5]}px;
    // padding-right: ${p => p.theme.space[4]}px;
  }
`;

export const PetsContainer = styled(Container)`
  @media (min-width: ${theme.breakpoints[2]}) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  display: inline;

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const TitleBtn = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]};
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
