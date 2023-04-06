import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_orange.css';
import { theme } from 'globalStyles/theme';
import { ReactComponent as PensilIcon } from 'images/svg/pensil.svg';
import { ReactComponent as CheckIcon } from 'images/svg/check.svg';

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const InfoField = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoProp = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
  }
`;

export const InfoInput = styled.input`
  max-width: 159px;
  padding: 4px 14px;
  border: ${({ theme, disabled }) =>
    disabled ? theme.borders.transparent : theme.borders.input};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.transparent : theme.colors.background};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 216px;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
`;

export const FlatpickrStyled = styled(Flatpickr)`
  max-width: 159px;
  padding: 4px 14px;
  border: ${({ theme, disabled }) =>
    disabled ? theme.borders.transparent : theme.borders.input};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.transparent : theme.colors.background};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 216px;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
`;

export const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: ${p => p.theme.radii.circular};
  border: ${p => p.theme.borders.none};

  color: ${({ theme, disabled }) =>
    disabled ? 'rgba(17, 17, 17, 0.6)' : theme.colors.accent};
  background-color: ${p => p.theme.colors.background};

  transition: ${p => p.theme.transition.main};
  cursor: pointer;

  &:hover {
    color: ${({ theme, disabled }) =>
      disabled ? 'rgba(17, 17, 17, 0.6)' : theme.colors.white};
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.background : theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 32px;
    height: 32px;
  }
`;

export const Pensil = styled(PensilIcon)`
  display: inline-block;
  width: 12.5px;
  height: 12.5px;
  fill: currentColor;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const Check = styled(CheckIcon)`
  display: inline-block;
  width: 12.5px;
  height: 12.5px;
  fill: currentColor;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const Error = styled.p`
  position: absolute;
  left: 81px;
  bottom: -13px;

  font-size: 10px;

  color: ${theme.colors.error};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 125px;
    bottom: -15px;
    font-size: ${theme.fontSizes[0]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    left: 129px;
  }
`;
