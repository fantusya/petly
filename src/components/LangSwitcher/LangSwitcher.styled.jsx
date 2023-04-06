import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
const { fontWeights } = theme;

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: 50px;
  margin-top: -7px;
  scale: 0.8;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 20px;
    margin-top: 3px;
    scale: 1.15;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 30px;
    margin-top: -1px;
    scale: 1.15;
  }

  > span {
    position: absolute;
    top: 14px;
    pointer-events: none;
    font-weight: ${fontWeights[2]};
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    width: 50%;
    text-align: center;
  }

  > .on {
    left: 0;
    padding-left: 2px;
    color: #f59256;
  }

  > .off {
    right: 0;
    padding-right: 4px;
    color: #fff;
  }

  > .check-toggle:checked ~ .off {
    color: #f59256;
  }

  > .check-toggle:checked ~ .on {
    color: #fff;
  }

  .check-toggle {
    position: absolute;
    visibility: hidden;
  }

  .check-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .check-toggle-round-flat + label {
    padding: 20px;
    width: 97px;
    height: 35px;
    background-color: #f59256;
    border-radius: 60px;

    @media (min-width: 1280px) {
      height: 44px;
    }

    &:before,
    &:after {
      display: block;
      position: absolute;
      content: '';
    }

    &:before {
      top: 2px;
      left: 2px;
      bottom: 2px;
      right: 2px;
      background-color: #f59256;
      border-radius: 60px;
    }

    &:after {
      top: 2px;
      left: 2px;
      bottom: 2px;
      width: 48px;
      background-color: #fff;
      border-radius: 52px;
      transition: margin 0.2s;

      @media (prefers-reduced-motion: no-preference) {
        transition: margin 0.2s;
      }
    }
  }

  .check-toggle-round-flat:checked + label {
  }

  .check-toggle-round-flat:checked + label:after {
    margin-left: 44px;
  }
`;
