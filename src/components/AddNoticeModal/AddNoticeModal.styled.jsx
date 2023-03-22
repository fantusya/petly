import styled from 'styled-components';
// import { CloseButton } from 'components/Button/CloseButton';  // ???

import maleIcon from 'images/male-icon.png';
import femaleIcon from 'images/female-icon.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 40px 80px;
  }
`;

export const CloseBtn = styled(CloseButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.textBold};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: ${p => p.theme.lineHeights.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const FirstForm = styled.div`
  /* margin-top: 20px;
  margin-bottom: 40px; */
`;

export const UserComment = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 448px;
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.space[3]}px;
  row-gap: ${p => p.theme.space[3] + 4 }px;
  margin-bottom: ${p => p.theme.space[5]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 448px;
    margin-bottom: 28px;
    column-gap: ${p => p.theme.space[3] + 4 }px;
    row-gap: ${p => p.theme.space[4]}px;
  }
`;

export const RadioLabel = styled.label`
  /* margin-bottom: ${p => p.theme.space[2]}px; */
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + div {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px 25px;
  
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  line-height: ${p => p.theme.lineHeights.text};
  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const InputCont = styled.div`
  /* width: 100%; */
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.logo};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 24px;
  }
`;

export const TextInput = styled.input`
  display: block;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  outline: none;
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  /* width: 240px; */
  width: 100%;
  height: 40px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: 0;
  padding-left: 14px;
  border-radius: ${p => p.theme.radii.big};

  ::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: ${p => p.theme.lineHeights.text};
    color: rgba(27, 27, 27, 0.6);
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 12px;
    /* width: 448px; */
    width: 100%;
    height: 48px;
    padding-left: ${p => p.theme.space[4]}px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const DateInput = styled.input`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-top: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.bold} rgba(245, 146, 86, 0.5);
  /* width: 240px; */
  width: 100%;
  height: 40px;
  border-radius: ${p => p.theme.radii.big};
  ::placeholder {
    font-family: ${p => p.theme.fonts.text};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: ${p => p.theme.lineHeights.text};
    color: rgba(27, 27, 27, 0.6);
  }
  &::-webkit-calendar-picker-indicator {
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
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    /* width: 448px; */
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const InputContTextArea = styled.div`
  // margin-bottom: ${p => p.theme.space[4]}px;
  // @media (min-width: ${p => p.theme.breakpoints[1]}) {
  //   margin-bottom: 28px;
  // }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;

  width: 240px;
  // height: 40px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: 12px 5px 12px 14px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  border-radius: ${p => p.theme.radii.small};
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  background-color: ${p => p.theme.colors.background};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 448px;
  }
`;

//!======SECOND PAGE===============
export const SexFormBox = styled.fieldset`
  display: flex;
  margin-bottom: ${p => p.theme.space[5]}px;
  border: none;
  padding: 0;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 40px;
  }
`;

export const BoxQuestion = styled.legend`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.logo};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.logo};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const MaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${maleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const FemaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${femaleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + label {
    color: ${p => p.theme.colors.accent};
  }
`;

export const PhotoPetInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 116px;
  height: 116px;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.background};
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  width: 140px;
  height: 140px;
  }
`;

export const ImageInputWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  // align-items: center;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin-bottom: 28px;
`;

export const ImageTitle = styled.label`
  // text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.2;
  letter-spacing: ${p => p.theme.letterSpacing.title};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const AddedImage = styled.div`
  overflow: hidden;
  display: flex;
  // justify-content: center;
  // align-items: center;
  // margin: 0 auto;
  margin-right: auto;
  width: 116px;
  height: 116px;
  border-radius: ${p => p.theme.radii.small};
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 140px;
    height: 140px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: row;
    // gap: ${p => p.theme.space[3]}px;
  }
`;