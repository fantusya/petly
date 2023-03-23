import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
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

  color: rgba(17, 17, 17, 0.6);
  color: ${theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${theme.transition.main};

  span {
    color: rgba(17, 17, 17, 0.6);
    transition: ${theme.transition.main};
  }

  &:hover,
  :active {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};

    span {
      color: ${theme.colors.white};
    }
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${theme.fontSizes[2]};
  }
`;

export const LogoutIcon = styled(Icon)`
  fill: currentColor;
  /* stroke: currentColor; */
`;
