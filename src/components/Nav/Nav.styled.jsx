import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;

  //   justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[7]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  text-decoration: none;

  color: ${p => p.theme.colors.secondaryText};

  transition: ${p => p.theme.transition.main};

  &.active {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.accent};
    text-decoration-line: underline;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[9]};
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
    line-height: ${p => p.theme.lineHeights.text};
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 10px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &:last-of-type {
    margin-right: 0;
  }

  --c: ${p => p.theme.colors.accent}; /* the color */
  --b: 0.1em; /* border length*/
  --d: 20px; /* the cube depth */
  --_s: calc(var(--d) + var(--b));

  border: solid #0000;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background: conic-gradient(
        at left var(--d) bottom var(--d),
        #0000 90deg,
        rgb(255 255 255 /0.3) 0 225deg,
        rgb(255 255 255 /0.6) 0
      )
      border-box,
    conic-gradient(at left var(--_s) bottom var(--_s), #0000 90deg, var(--c) 0)
      0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
  background-color: #fdb8401a;
  transform: translate(calc(var(--d) / -1), var(--d));
  clip-path: polygon(
    var(--d) 0%,
    var(--d) 0%,
    100% 0%,
    100% calc(100% - var(--d)),
    100% calc(100% - var(--d)),
    var(--d) calc(100% - var(--d))
  );

  &:hover {
    transform: translate(0, 0);
    clip-path: polygon(
      0% var(--d),
      var(--d) 0%,
      100% 0%,
      100% calc(100% - var(--d)),
      calc(100% - var(--d)) 100%,
      0% 100%
    );
  }
`;
