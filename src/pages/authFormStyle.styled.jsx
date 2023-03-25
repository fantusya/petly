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

export const TitleAuth = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  @media (min-width: ${theme.breakpoints[1]}) {
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

  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]};
    padding: 14px 32px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 112px;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]};

  border: inherit;

  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  color: ${theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  transition: ${theme.transition.main};

  &:hover,
  :active {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 200px;
  }
`;

// ---------- Картинка на заднем плане ------------

export const LogoBg = styled.div`
  background-image: url('${imgPhone}');
  background-repeat: no-repeat;
  margin-top: 60px;
  padding-bottom: 120px;
  background-position: -60px 250px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url('${img2xPhone}');
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    background-image: url('${imgTab}');
    background-position: -260px 270px;
    padding-bottom: 200px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url('${img2xTab}');
      background-position: center 390px;
      background-size: 130%;
    }
    @media (min-width: ${theme.breakpoints[2]}) {
      background-image: url('${imgDesc}');
      background-position: top center;

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

// ------------Иконка показать скрыть пароль ---------

export const Icon = styled.span`
  position: absolute;
  top: 43%;
  right: 9px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  cursor: pointer;
  &:hover *,
  &:focus * {
    fill: ${p => p.theme.colors.primary};
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    top: 42%;
    right: 22px;
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
// ------------Текст валидации стили -----------

export const Error = styled(ErrorMessage)`
  margin-left: 10px;
  margin-top: -15px;
  color: #e2001a;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.text};
`;

// ------------- окно для формы ----------------

export const BoxAuth = styled.div`
  @media (min-width: ${theme.breakpoints[1]}) {
    margin-top: 204px;
    margin-left: 80px;
    margin-right: 80px;
    border-radius: ${p => p.theme.radii.small};
    padding: 60px 80px;
    box-shadow: ${p => p.theme.shadows.section};
    background-color: ${theme.colors.white};
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    margin-top: 204px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`;

//============== стили для компонента "routeFormLogin"----------------

export const TextBox = styled.p`
  @media (min-width: ${theme.breakpoints[1]}) {
    text-align: center;
  }
`;

export const SpanText = styled.span`
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
`;
export const LinkToOtherPage = styled(Link)`
  margin-left: 6px;
  color: ${p => p.theme.colors.linc};
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
`;
