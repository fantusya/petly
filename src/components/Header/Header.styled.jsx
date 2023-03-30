import styled from 'styled-components';
import { blink } from 'keyframes';

export const HeaderElement = styled.header`
  z-index: 1;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  top: 0;
  width: 100%;
  /* padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 0;  */
  position: fixed;

  background-color: ${p => p.theme.colors.background};

  animation: ${blink} 2s both;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
