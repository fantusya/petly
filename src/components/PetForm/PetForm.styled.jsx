import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as Icon } from 'images/svg/addAvatar.svg';

export const PetBox = styled.div`
  margin-top: ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[5] - 4}px;
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

  background-color: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.big};

  color: ${p => p.theme.colors.black};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: ${p => p.theme.space[4] - 4}px;
    padding-left: ${p => p.theme.space[4]}px;
    width: 448px;
  }
`;

export const TextInput = styled(Input)`
  height: 100px;
  border-radius: ${p => p.theme.radii.small};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: ${p => p.theme.space[4]}px;
    margin-top: ${p => p.theme.space[4] - 4}px;
    height: 116px;
    // margin-left: ${p => p.theme.space[5] - 4}px;
    // width: 394px;
  }
`;

export const AddPhotoIcon = styled(Icon)`
  fill: currentColor;
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

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: ${p => p.theme.space[0]}px;

    width: 180px;
    border-radius: ${p => p.theme.radii.big};

    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;
