import styled from 'styled-components';
import { Box } from 'components/Box/Box';

import { ReactComponent as Heart } from '../../images/svg/heart.svg';
import { Label, ModalButton } from 'components/commonComponents';

export const Backdrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;

  width: 100vw;
  height: 100%;
  // ====================================================================================================================================
  // закомментировал 3 строки ниже (19-21) - их присутствие ничем не обосновано
  // отступ сверху лучше задать фиксированным (в моб. варианте)б т.к. иначе
  // модальное окно появляется слишком низко (попробуй с закомментированными ниже стилями и без, при выосте окна 700px - любой современный телефон)
  // display: flex;
  // align-items: center;
  // justify-content: flex-start;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  font-family: ${p => p.theme.fonts.text};
`;

export const ModalContainer = styled(Box)`
  width: 280px;

  margin: auto;
  padding: 20px;

  background: ${p => p.theme.colors.white};
  border-radius: 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 704px;
    padding: 32px 20px;
  }
`;

export const Wrapper = styled(Box)`
  height: 240px;
  padding-top: 20px;
  margin-bottom: 16px;

  border-radius: 0px 0px 40px 40px;

  background-image: url(${props => props.img});
  background-size: cover;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 288px;
    height: 328px;
    margin-right: 20px;
  }
`;

export const ModalLabel = styled(Label)`
  display: block;

  backdrop-filter: blur(50px);
`;

export const ModalTitle = styled(Box)`
  margin-bottom: 16px;

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.title};
`;

export const ModalRecords = styled(Box)`
  margin-bottom: 28px;

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.357;
`;

export const ModalСharacteristic = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ModalComments = styled.p`
  margin-bottom: 40px;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.357;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const CommentsBold = styled.span`
  font-weight: 600;
`;

export const AddFavoriteIcon = styled(Heart)`
  width: 16px;
  height: 16px;

  margin-left: 9px;

  & path {
    fill: ${p => p.theme.colors.accent};
`;

export const ModalFavoriteButton = styled(ModalButton)`
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};

    transition: ${p => p.theme.transition.main};

    ${AddFavoriteIcon} path {
      fill: ${p => p.theme.colors.white};
      transition: ${p => p.theme.transition.main};
    }
  }
`;

export const ButtonsWrapper = styled(Box)`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;
