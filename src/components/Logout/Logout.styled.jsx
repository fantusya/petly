import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/logout.svg';

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 4px 10px;
  gap: 8px;
  border: inherit;
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${p => p.theme.transition.main};

  span {
    color: ${p => p.theme.colors.modalBackdrop};
    transition: ${p => p.theme.transition.main};
  }

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};

    span {
      color: ${p => p.theme.colors.white};
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const LogoutIcon = styled(Icon)`
  fill: currentColor;
  stroke: currentColor;
`;
