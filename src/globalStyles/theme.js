import { createTheme } from 'styled-breakpoints';

const themeStyles = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#111111',
    secondaryText: '#181C27',
    accent: '#F59256',
    background: '#FDF7F2',
    inputTxt: '#535353',
    cardLabelBg: 'rgba(255, 255, 255, 0.6)',
    accentBtn: '#FF6101',
    newsTxt: '#111321',
    date: '#6f6d6b',
    hintTxt: '#707070',
    linlTxt: '#3091EB',
    border: '#f9c4a4',
    error: '#E2001A',
    success: '#3CBC81',
    logoutIcon: '#f9be9a',
    modalBackdrop: '#11111199',
    transparent: 'transparent',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    text: 'Manrope',
    textMedium: 'Manrope Medium',
    textBold: 'Manrope Bold',
    logo: 'Poppins Bold',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '48px',
    '68px',
  ],
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    logo: 1.5,
    text: 1.375,
  },
  letterSpacing: {
    logo: '0.07em',
    text: '0.04em',
    title: '-0.01em',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
    transparent: '1px solid transparent',
    input: '1px solid rgba(245, 146, 86, 0.5)',
    inputError: '1px solid #E2001A',
    inputSuccess: '1px solid #3CBC81',
  },
  radii: {
    none: '0',
    small: '20px',
    big: '40px',
    circular: '50%',
  },
  shadows: {
    section: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    avatar: '0px 4px 14px rgba(0, 0, 0, 0.11)',
  },
  transition: {
    main: '400ms ease',
  },
  breakpoints: ['320px', '768px', '1280px'],
};

const themeBreakpoints = createTheme({
  mobile: '320px',
  mobileSizeM: '575px',
  tablet: '768px',
  tabletM: '820px',
  pcSizeS: '912px',
  pcSizeM: '1024px',
  pcSizeL: '1200px',
  pc: '1280px',
});

export const theme = { ...themeStyles, ...themeBreakpoints };
