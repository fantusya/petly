import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as KameraIcon } from 'images/svg/kamera.svg';
import { ReactComponent as CheckIcon } from 'images/svg/check.svg';

export const AvatarWrapper = styled.form`
  @media (min-width: ${theme.breakpoints[2]}) {
    width: 382px;
    margin-left: auto;
  }
`;

export const AvatarImg = styled.img`
  object-fit: cover;
`;

export const AddAvatarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 233px;
  height: 233px;
  margin: 0 auto 12px;
  border: none;
  border-radius: ${p => p.theme.radii.circular};
  box-shadow: ${p => p.theme.shadows.avatar};
  cursor: pointer;
  overflow: hidden;
  color: ${theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  @media (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 8px;
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 0;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const EditPhotoBtn = styled.button`
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

export const Kamera = styled(KameraIcon)`
  fill: currentColor;
`;

export const Check = styled(CheckIcon)`
  display: inline-block;
  width: 50px;
  height: 50px;
  fill: currentColor;
`;
