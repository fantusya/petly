import styled from 'styled-components';

import golden1 from '../../images/hero/dog/golden1.webp';
import golden2x from '../../images/hero/dog/golden@2x.webp';

import goldenT1 from '../../images/hero/dog/goldenT1.webp';
import goldenT2x from '../../images/hero/dog/goldenT@2x.webp';

import goldenD1 from '../../images/hero/dog/goldenD1.webp';
// import goldenD2x from "../../images/hero/dog/goldenD@2x.webp";

import Wav1 from '../../images/hero/waves/Wav1.webp';
import Wav2x from '../../images/hero/waves/Wav@2x.webp';

import WaveT from '../../images/hero/waves/WaveT.webp';
import WaveT2x from '../../images/hero/waves/WaveT@2x.webp';

import WaveD1 from '../../images/hero/waves/WaveD1.webp';
// import WaveD2x from "../../images/hero/waves/WavesD@2x.webp";

import { theme } from '../../globalStyles/theme';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const HomeTitle = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: ${p => theme.lineHeights.text};
  font-family: ${p => p.theme.fonts.textMedium};
  color: ${p => theme.colors.black};

  @media screen and (min-width: 768px) {
    max-width: 607px;
    font-size: ${p => theme.fontSizes[10]};
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const HomeSection = styled.section`
padding-top: 100px;
min-height: 100vh;
background-repeat: no-repeat;
background-position: bottom;

background-image: url(${golden1}), url(${Wav1});
background-size: 280px 380px, 100vw 470px;

@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${golden2x}), url(${Wav2x});
  }


  @media screen and (min-width: 768px) {
    min-height: 100vh;
    padding-top: 130px;

    background-image: url(${goldenT1}), url(${WaveT});
    background-size: 636px 760px, 100vw 1085px;


    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${goldenT2x}), url(${WaveT2x});
    }
  }

   @media screen and (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 408px;
    min-height: 100vh;


    background-image: url(${goldenD1}), url(${WaveD1});
    background-size: 592px 745px, 102vw calc(100vw * 0.645);
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    // 577px 675px, 101vw calc(61.5vw);
    background-position-y: bottom, bottom, calc(50% - 204px);

`;
