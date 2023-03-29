import styled from 'styled-components';

export const ListFriends = styled.ul`
  a {
    display: block;

    text-decoration: none;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemFriend = styled.li`
  &:first-child {
    position: relative;
  }

  padding: ${p => p.theme.space[3] + 4}px ${p => p.theme.space[2]}px;

  justify-content: center;

  border-radius: ${p => p.theme.radii.small};

  background-color: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.section};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  @media only screen and (min-width: ${p => p.theme.breakpoints[0]}) and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3] + 4}px;
    }
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[1]}) and (max-width: 1279px) {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
    margin-right: ${p => p.theme.space[5]}px;
    &:nth-child(2n) {
      margin-right: 0;
    }
    margin-bottom: ${p => p.theme.space[5]}px;
    &:nth-last-child(-n + ${p => p.resultsLength % 2 || 2}) {
      margin-bottom: 0;
    }
    width: calc((100% / 2) - (${p => p.theme.space[5]}px) / 2);

    border-radius: ${p => p.theme.radii.big};

    font-size: ${p => p.theme.fontSizes[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[5]}px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    margin-bottom: ${p => p.theme.space[5]}px;
    &:nth-last-child(-n + ${p => p.resultsLength % 3 || 3}) {
      margin-bottom: 0;
    }
    width: calc((100% / 3) - (${p => p.theme.space[5]}px * 2 / 3));

    border-radius: ${p => p.theme.radii.big};

    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const ItemFriendBox = styled.div`
  display: flex;
`;

export const ItemFriendName = styled.a`
  padding-left: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.accent};

  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  transition: all ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    text-decoration: underline;

    transition: all ${p => p.theme.transition.main};
  }

  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    margin-bottom: ${p => p.theme.space[3] + 4}px;
    height: 44px;

    font-size: ${p => p.theme.fontSizes[2]};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[4]}px;
    height: 44px;

    font-size: ${p => p.theme.fontSizes[2]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 54px;

    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const ItemFriendLogo = styled.img`
  margin-right: ${p => p.theme.space[3] + 4}px;
  width: 110px;
  height: 78px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: ${p => p.theme.space[3] + 6}px;
    width: 120px;
    height: 85px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: ${p => p.theme.space[4]}px;
    width: 158px;
    height: 115px;
  }
`;

export const InfoFriendsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  };

  & p.time {
    transition: all ${p => p.theme.transition.main};
  };

  & p.time:hover,
  & p.time:focus {
    color: ${p => p.theme.colors.accent};

    transition: all ${p => p.theme.transition.main};

    & ~ ul {
      display: block;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]}px;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3] + 4}px;
    }
  }
`;

export const InfoFriendsLink = styled.a`
  color: ${p => p.theme.colors.black};

  transition: all ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};

    transition: all ${p => p.theme.transition.main};
  }
`;
