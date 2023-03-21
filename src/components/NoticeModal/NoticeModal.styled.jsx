import styled from 'styled-components';
import { Box } from 'components/Box/Box';

import { ReactComponent as Cross } from '../../images/svg/cross.svg';

export const CloseIcon = styled(Cross)`
  //   width: 24px;
  //   height: 22px;
`;

export const Backdrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  // right: 0;
  // bottom: 0;
  width: 100vw;
  height: 100%;
  padding-top: 160px;

  // diaplay: flex;
  // align-items: center;
  // justify-content: center;

  // background: rgba(17, 17, 17, 0.6);
  background: black;

  // backdrop-filter: blur(10px);

  z-index: 1;
`;

export const ModalContainer = styled(Box)`
  width: 280px;
  // max-height: 900px;

  margin: 0 auto;
  padding: 20px;

  background: ${p => p.theme.colors.white};
  border-radius: 20px;

  // z-index: 999;
`;

export const Wrapper = styled(Box)`
  height: 240px;

  background-image: url(${props => props.img});
  background-size: cover;
`;

export const ModalTitle = styled(Box)`
  margin-bottom: 20px;

  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[6]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.357;
  letter-spacing: ${p => p.theme.letterSpacing.title};
`;

export const ModalRecords = styled(Box)`
  margin-bottom: ${props => (props.isLogged ? '20px' : '50px')};

  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const ModalСharacteristic = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
