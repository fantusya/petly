import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { theme } from 'globalStyles/theme';
import { Link } from 'react-router-dom';
import imgPhone from '../images/hero/waves/wave_sm.webp';
import img2xPhone from '../images/hero/waves/wave_sm.webp';
import imgTab from '../images/forms/wave_lg.webp';
import img2xTab from '../images/forms/wave_lg@2x.webp';
import imgDesc from '../images/forms/wave_lg.webp';
import img2xDesc from '../images/forms/wave_lg@2x.webp';
import { useState, useEffect } from 'react';

import svgError from '../images/svg/error.svg';
import svgSucsess from '../images/svg/success.svg';

export const TitleAuth = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 0;
    font-size: ${p => p.theme.fontSizes[8]};
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled(Field)`
  margin-bottom: 24px;
  padding: 11px 14px;
  width: 100%;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0 9px 0;
  margin-bottom: 12px;
  margin-top: 4px;
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]};

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
    padding: 12px 0 12px 0;
  }
`;

export const LogoBg = styled.div`
  background-image: url('${imgPhone}');
  background-repeat: no-repeat;
  margin-top: 100px;
  padding-bottom: 120px;
  background-position: 50% 350px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url('${img2xPhone}');
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    background-image: url('${imgTab}');
    background-position: 50% 350px;
    padding-bottom: 200px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('${img2xTab}');
      background-position: 50% 450px;
      background-size: 130%;
    }
    @media (min-width: ${p => p.theme.breakpoints[2]}) {
      background-image: url('${imgDesc}');
      background-position: center 350px;

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        background-image: url('${img2xDesc}');
        background-size: 100%;
        background-position: center 370px;
      }
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 43%;
  right: 3px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  cursor: pointer;
  &:hover *,
  &:focus * {
    fill: ${p => p.theme.colors.primary};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 42%;
    right: -30px;
  }
  svg {
    width: 16px;
    height: 16px;
    @media screen and (min-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  margin-left: 10px;
  margin-top: -15px;
  color: #e2001a;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.text};
`;

// ------------- окно для формы ----------------

export const BoxAuth = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 204px;
    margin-left: 80px;
    margin-right: 80px;
    border-radius: ${p => p.theme.radii.small};
    padding: 60px 80px;
    box-shadow: ${p => p.theme.shadows.section};
    background-color: ${p => p.theme.colors.white};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: 204px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextBox = styled.p`
  margin-top: 28px;
  text-align: center;
`;

export const SpanText = styled.span`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
`;
export const LinkToOtherPage = styled(Link)`
  padding: 0 6px;
  border-radius: ${p => p.theme.radii.small};
  color: ${p => p.theme.colors.linlTxt};
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.linlTxt};
  }
`;
// ------------- логика подсветки бордера инпута ----------

const CustomField = props => {
  const [isError, setIsError] = useState(false);
  const { errors, touched, name, values } = props;

  useEffect(() => {
    if (Object.keys(errors).includes(name)) {
      return setIsError(true);
    }
    setIsError(false);
  }, [errors, name, touched]);
  if (values === '') {
    return (
      <>
        <Input {...props} />
      </>
    );
  }
  return (
    <>
      <Input
        {...props}
        style={{
          border:
            isError && touched
              ? theme.borders.inputError
              : theme.borders.inputSuccess,

          backgroundImage:
            isError && touched ? `url(${svgError})` : `url(${svgSucsess})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '97% 50%',
        }}
      />
    </>
  );
};
export default CustomField;
