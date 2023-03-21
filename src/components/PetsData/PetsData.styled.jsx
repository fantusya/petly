import styled from 'styled-components';

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
