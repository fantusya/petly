import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as Open } from 'images/svg/eye-password-show.svg';
import { ReactComponent as Closed } from 'images/svg/eye-password-hide.svg';

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;

export const ButtonImg = styled.button`
  position: absolute;
  top: 10px;
  left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  background-color: inherit;
  @media (min-width: ${theme.breakpoints[1]}) {
    left: 300px;
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    left: 400px;
  }
`;
export const Div = styled.div`
  position: relative;
`;

export const OpenEyaIcon = styled(Open)``;
export const ClosedEyaIcon = styled(Closed)``;
