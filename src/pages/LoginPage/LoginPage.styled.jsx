import styled from 'styled-components';

export const GoogleLoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0 7px 0;
  /* margin-bottom: 40px; */
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]};
  text-decoration: none;

  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};

  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color ${p => p.theme.transition.main},
      background-color ${p => p.theme.colors.accent};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 9px 0 9px 0;
  }
`;

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;

export const LoginPOsitionBtn = styled.div`
  position: absolute;
  top: -70px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    top: -70px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    top: -70px;
  }
`;
