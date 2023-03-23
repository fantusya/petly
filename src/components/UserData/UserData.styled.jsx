import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { Container } from 'globalStyles/globalStyle';
import { ReactComponent as Icon } from 'images/svg/kamera.svg';

export const TitleContainer = styled(Container)`
  margin-bottom: 18px;

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 40px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.black};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[6]};
    color: ${theme.colors.text};
  }
`;

export const UserContainer = styled(Container)`
  @media (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

export const UserSection = styled.div`
  padding: 20px 12px 20px 16px;

  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.section};

  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 52px;
    flex: 0 0 calc(100vw / 2 + (768px - 32px * 2) / 2);
    padding: 24px 40px 24px 0;

    border-radius: ${theme.radii.big};
    border-top-left-radius: ${theme.radii.none};
    border-bottom-left-radius: ${theme.radii.none};
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    position: relative;
    flex-direction: column;
    gap: 32px;
    flex: 0 0 calc(100vw - 16px * 2 - 821px - 32px);
    width: 0 0 calc(100vw - 16px * 2 - 821px - 32px);
    padding: 20px 16px 18px 0;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;

export const UserPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 233px;
  height: 233px;
  margin: 0 auto 12px;
  border-radius: ${p => p.theme.radii.circular};
  box-shadow: ${p => p.theme.shadows.avatar};

  background-color: ${p => p.theme.colors.background};

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 8px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 0;
  }
`;

export const UserPhotoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 24px 36px auto;
  padding: 4px 8px;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.logo};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${p => p.theme.transition.main};

  span {
    color: ${theme.colors.text};
    transition: ${theme.transition.main};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};

    span {
      color: ${p => p.theme.colors.white};
    }
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    margin: 0 0 0 auto;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    position: absolute;
    top: 231px;
    right: 16px;
  }
`;

export const UserThumb = styled.div`
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 379px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    width: 382px;
    margin-left: auto;
  }
`;

export const UserDataList = styled.ul`
  margin-bottom: 40px;

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-top: 16px;
    margin-bottom: 33px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const Kamera = styled(Icon)`
  fill: currentColor;
`;
