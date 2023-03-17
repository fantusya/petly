import styled from 'styled-components';

export const Title = styled.h1`
  padding: ${p => p.theme.space[5]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};

  font-family: ${p => p.theme.fonts.textBold};
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  &:hover {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[7]};
  }
`;
