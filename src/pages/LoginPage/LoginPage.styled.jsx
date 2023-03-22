import styled from 'styled-components';
import { Field, Form } from 'formik';
import { theme } from 'globalStyles/theme';

export const TitleAuth = styled.h1`
  text-align: center;
  font-family: ${p => p.theme.fonts.text};
  margin-bottom: 40px;
  font-size: ${p => p.theme.fontSizes[8]};
`;
export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  gap: 8px;
  border: inherit;
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: rgba(17, 17, 17, 0.6);
  color: ${theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  transition: ${theme.transition.main};

  &:hover,
  :active {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
`;

export const Input = styled(Field)`
  padding: 4px 18px;
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.background};
`;
