import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as Open } from 'images/svg/openedEye.svg';
import { ReactComponent as Closed } from 'images/svg/closedEye.svg';

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;

export const ButtonImg = styled.button`
  position: absolute;
  top: 15px;
  left: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18px;
  height: 18px;
  border: none;
  background-color: inherit;
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
    top: 20px;
    left: 330px;
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    width: 25px;
    height: 25px;
    top: 20px;
    left: 430px;
  }
`;
export const Div = styled.div`
  position: relative;
`;

export const OpenEyaIcon = styled(Open)``;
export const ClosedEyaIcon = styled(Closed)``;
