import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const PageTitle = styled.h1`
  margin-bottom: 28px;
  text-align: center;

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  line-height: ${p => p.theme.lineHeights.text};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[9]};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 40px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 60px;
  }
`;
