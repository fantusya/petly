import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/trash.svg';

export const CardWrapper = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4] + 4}px;
  padding-right: ${p => p.theme.space[4] + 4}px;
  padding-bottom: ${p => p.theme.space[5] + 8}px;

  border: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const Image = styled.img`
  margin: 0 auto;
  display: block;
  height: auto;

  border-radius: ${p => p.theme.radii.small};
`;

export const PetInfo = styled.p`
  margin-bottom: ${p => p.theme.space[1] + 10}px;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
  letter-spacing: ${p => p.theme.letterSpacing.text};
`;

export const PetTitle = styled.span`
  font-family: ${p => p.theme.fonts.textMedium};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const BtnDelete = styled.button`
  position: absolute;
  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[0]}px;

  border: ${p => p.theme.borders.none};

  color: ${p => p.theme.colors.hintTxt};
  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.accent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const DeleteIcon = styled(Icon)`
  fill: currentColor;
`;
