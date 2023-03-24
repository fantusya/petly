import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/closeModal.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;

  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: ${p => p.theme.colors.modalBackdrop};

  transition: background-color ${p => p.theme.transition};
`;

// @media screen and (max-width: 767px) {
//     overflow-y: hidden;
//   }

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 280px;
  height: auto;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.small};

  background-color: ${p => p.theme.colors.white};

  transition: transform ${p => p.theme.transition};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4] + 4}px;

  color: ${p => p.theme.colors.text};

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  text-align: center;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: ${p => p.theme.space[4] + 4}px;
  right: ${p => p.theme.space[4] + 4}px;

  display: flex;
  align-items: center;

  width: ${p => p.theme.space[5] + 2}px;
  height: ${p => p.theme.space[5] + 2}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.circular};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  cursor: pointer;

  transition: color ${p => p.theme.transition.accent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const ModalCloseIcon = styled(Icon)`
  fill: currentColor;
`;
