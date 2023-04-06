import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as Icon } from 'images/svg/addAvatar.svg';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_orange.css';

export const PetBox = styled.div`
  margin-top: ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[5] - 4}px;
  }
`;

export const PetWrap = styled.div`
  text-align: center;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[5] + 8}px;
  }
`;

export const Label = styled.label`
  color: ${p => p.theme.colors.text};

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.44;
  letter-spacing: ${p => p.theme.letterSpacing.text};

  text-align: center;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 1.08;
  }
`;

export const LabelText = styled(Label)`
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const Forma = styled(Form)`
  color: rgba(27, 27, 27, 0.6);

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3] + 2}px ${p => p.theme.space[4] - 2}px;

  width: 240px;
  outline: 1px solid transparent;
  background-color: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.big};

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.6;

  ::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[1]};
    line-height: ${p => p.theme.lineHeights.text};
    color: rgba(27, 27, 27, 0.6);

    @media (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: ${p => p.theme.space[4] - 4}px;
    padding-left: ${p => p.theme.space[4]}px;
    width: 448px;

    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const TextInput = styled(Input)`
  height: 100px;
  margin-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: ${p => p.theme.space[4]}px;
    margin-top: ${p => p.theme.space[4] - 4}px;
    height: 116px;
    // margin-left: ${p => p.theme.space[5] - 4}px;
    // width: 394px;
  }
`;

export const ErrorValidation = styled(ErrorMessage)`
  padding-left: ${p => p.theme.space[4] + 4}px;
  margin-top: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.error};

  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.logo};
  text-align: left;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: ${p => p.theme.space[2] + 2}px;

    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3] + 1}px;
  margin-bottom: ${p => p.theme.space[4] - 4}px;

  width: 240px;

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }

  ${props =>
    props.next &&
    css`
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.background};

      &:hover,
      &:focus {
        color: ${p => p.theme.colors.accent};
        background-color: ${p => p.theme.colors.background};
      }
    `};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[0]}px;

    width: 180px;
    border-radius: ${p => p.theme.radii.big};

    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const ButtonBox = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const PetAvatarBtn = styled.button`
  margin: 0 auto 20px;
  margin-top: ${p => p.theme.space[4] + 4}px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  background-color: ${p => p.theme.colors.background};

  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[0]}px;
    width: 182px;
    height: 182px;
  }
`;

export const AddPhotoIcon = styled(Icon)`
  fill: currentColor;
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

export const RemoveImgBtn = styled.button`
  opacity: 0;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  width: 30px;
  height: 30px;

  font-size: ${p => p.theme.fontSizes[7]};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-bottom-left-radius: 10px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.cardLabelBg};

  cursor: pointer;

  transition: opacity ${p => p.theme.transition.main},
    color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const PreviewContainer = styled.div`
  display: inline-block;
  position: relative;

  &:hover ${RemoveImgBtn}, &:focus ${RemoveImgBtn} {
    opacity: 1;
    /* pointer-events: visible;
    color: ${p => p.theme.transition.accent}; */
  }
`;

export const PreviewImg = styled.img`
  display: block;
  object-fit: cover;

  width: 208px;
  height: 208px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[0]}px;
    width: 182px;
    height: 182px;
  }
`;

export const DateInput = styled(Flatpickr)`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-top: ${p => p.theme.space[3]}px;
  outline: 1px solid transparent;

  border: 1px solid rgba(245, 146, 86, 0.5);
  /* width: 240px; */
  width: 100%;
  height: 40px;
  border-radius: ${p => p.theme.radii.big};

  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};

  /* &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  } */
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    /* width: 448px; */
    font-size: ${p => p.theme.fontSizes[2]};

    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }
`;
