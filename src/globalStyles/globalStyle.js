import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;

    font-family: 'Manrope', sans-serif;
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.lineHeights.text};
    letter-spacing: ${p => p.theme.letterSpacing.text};

    background-color: ${p => p.theme.colors.background};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  /* outline: 1px solid red; */

  width: ${p => (p.header ? '100%' : p.theme.breakpoints[0])};
  padding: 0 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => (p.header ? '100%' : p.theme.breakpoints[1])};
    padding: 0 ${p => p.theme.space[5]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => (p.header ? '100%' : p.theme.breakpoints[2])};
    padding: 0 ${p => p.theme.space[4]}px;
  }
`;
