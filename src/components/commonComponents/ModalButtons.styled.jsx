import styled from 'styled-components';
export const ModalButton = styled.button`
  width: 100%;
  height: 40px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p => (p.confirm ? p.theme.colors.accent : p.theme.colors.text)};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  transition: ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 160px;

    &:not(:last-child) {
      margin-bottom: 0px;
    }

    &:last-child {
      margin-right: ${p => (p.confirm ? '0px' : '12px')};
    }
  }
`;

export const ModalCloseButton = styled.button`
  width: 34px;
  height: 34px;
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border-style: none;

  background-color: ${p => p.theme.colors.background};
  backdrop-filter: blur(2px);

  cursor: pointer;

  transition: ${p => p.theme.transition.main};

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
