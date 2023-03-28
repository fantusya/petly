import styled from 'styled-components';

export const LoadImageCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${p => p.theme.colors.background};
  margin-top: ${p => p.theme.space[3] + 4}px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.text};
`;

export const LoadImgLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: left;

  cursor: pointer;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}};
  line-height: ${p => p.theme.lineHeights.text};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 1.08;
    margin-top: ${p => p.theme.space[4]}px;
  }
`;

export const LoadImgInput = styled.input`
  display: none;
`;

export const LoadImgPlus = styled.img`
  width: 47px;
  height: 47px;
`;

export const ImagePreview = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${p => p.theme.colors.background};
  object-fit: cover;
`;

export const ErrorStyle = styled.div`
  position: absolute;
  bottom: ${p => p.theme.space[0]}px;
`;
