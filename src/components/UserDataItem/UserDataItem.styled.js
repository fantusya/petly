import styled from 'styled-components';
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

  @media (min-width: ${theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const InfoField = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoProp = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.text};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
  }
`;

export const InfoInput = styled.input`
  max-width: 159px;
  padding: 4px 18px;
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
    color: ${theme.colors.text};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
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

  &:hover {
    color: ${({ theme, disabled }) =>
      disabled ? 'rgba(17, 17, 17, 0.6)' : theme.colors.white};
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.background : theme.colors.accent};
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 32px;
    height: 32px;
  }
`;

export const Pensil = styled(PensilIcon)`
  display: inline-block;
  width: 12.5px;
  height: 12.5px;
  fill: currentColor;

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const Check = styled(CheckIcon)`
  display: inline-block;
  width: 12.5px;
  height: 12.5px;
  fill: currentColor;

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;
