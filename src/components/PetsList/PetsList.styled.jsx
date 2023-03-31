import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5] - 10}px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: ${p => p.theme.space[5] - 8}px;
  }
`;

export const Items = styled.li`
  margin-bottom: ${p => p.theme.space[4] + 4}px;

  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: ${p => p.theme.space[4] + 6}px;
  }
`;

export const UserPetScreen = styled.h2`
  color: ${p => p.theme.colors.accent};
  text-align: center;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacing.logo};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const Wrapper = styled.div`
  padding: ${p => p.theme.space[4] + 4}px;
  margin-top: ${p => p.theme.space[6] - 24}px;

  border: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.small};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.section};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 480px;
    margin: 0 auto;
    margin-top: ${p => p.theme.space[6] - 10}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: ${p => p.theme.space[6] - 4}px;
    width: 800px;
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
  margin-top: 40px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: 60px;
  }
`;

export const Img = styled.img`
  width: 100%;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 500px;
  }
`;
