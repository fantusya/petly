import { createGlobalStyle } from 'styled-components';

import PoppinsWoff from 'fonts/poppins/poppins-v20-latin-regular.woff';
import PoppinsWoff2 from 'fonts/poppins/poppins-v20-latin-regular.woff2';

import PoppinsBoldWoff from 'fonts/poppins/poppins-v20-latin-700.woff';
import PoppinsBoldWoff2 from 'fonts/poppins/poppins-v20-latin-700.woff2';

import ManropeWoff from 'fonts/manrope/manrope-v13-cyrillic_latin-regular.woff';
import ManropeWoff2 from 'fonts/manrope/manrope-v13-cyrillic_latin-regular.woff2';

import ManropeMediumWoff from 'fonts/manrope/manrope-v13-cyrillic_latin-500.woff';
import ManropeMediumWoff2 from 'fonts/manrope/manrope-v13-cyrillic_latin-500.woff2';

import ManropeBoldWoff from 'fonts/manrope/manrope-v13-cyrillic_latin-700.woff';
import ManropeBoldWoff2 from 'fonts/manrope/manrope-v13-cyrillic_latin-700.woff2';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsWoff2}) format('woff2'),
       url(${PoppinsWoff}) format('woff');
}

@font-face {
  font-family: 'Poppins Bold';
  src: url(${PoppinsBoldWoff2}) format('woff2'),
       url(${PoppinsBoldWoff}) format('woff');
}

@font-face {
  font-family: 'Manrope';
  src: url(${ManropeWoff2}) format('woff2'),
       url(${ManropeWoff}) format('woff');
}

@font-face {
  font-family: 'Manrope Medium';
  src: url(${ManropeMediumWoff2}) format('woff2'),
       url(${ManropeMediumWoff}) format('woff');
}

@font-face {
  font-family: 'Manrope Bold';
  src: url(${ManropeBoldWoff2}) format('woff2'),
       url(${ManropeBoldWoff}) format('woff');
}
`;

export default FontStyles;
