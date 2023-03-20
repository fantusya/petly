import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as Icon } from 'images/svg/pensil.svg';

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
`;

export const InfoInput = styled.input`
  max-width: 159px;
  padding: 4px 18px;
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.background};
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

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};

  transition: ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Pensil = styled(Icon)`
  width: 12.5px;
  height: 12.5px;
  fill: currentColor;
`;
