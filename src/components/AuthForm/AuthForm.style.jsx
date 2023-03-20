import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 42px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const RegisterForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;
`;

export const Input = styled(Field)`
  border-radius: 40px;
  border: 1px solid ${p => p.theme.colors.accent};
  width: 280px;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 12px;
  margin-top: 24px;
  line-height: 19px;

  font-size: ${p => p.theme.fontSizes[1]};
`;
export const H2 = styled.h2`
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: 33px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  justify-content: center;

  color: #111111;
`;
export const RegisterButton = styled.button`
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  &:hover {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }

  margin-top: 12px;

  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  width: 280px;

  padding: 8px;
`;
export const Text = styled.p`
  margin-top: 40px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
`;
export const Error = styled(ErrorMessage)`
  margin-left: -150px;
  margin-top: 2px;
  color: #e2001a;
  font-size: 11px;
  line-height: 15px;
`;
