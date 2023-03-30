import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const NewsItemContainer = styled.div`
  display: flex;

  margin-bottom: 40px;

  // padding: 0px 20px 0px 20px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 30px;
  }
`;

export const ContainerNews = styled.div`
  flex-grow: 1;
`;

export const Border = styled.div`
  // position: absolute;
  width: 200px;
  height: 4px;
  left: 0px;

  margin-bottom: 4px;

  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: ${p => p.theme.radii.big};

  @media (min-width: ${theme.breakpoints[1]}) {
    width: 280px;
    height: 8px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    width: 340px;
  }
`;

export const NewsTitle = styled.h3`
  // position: absolute;

  margin-bottom: 16px;

  color: ${p => p.theme.colors.text};

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.title};
`;

export const NewsDescription = styled.p`
  // position: absolute;
  width: 100%;

  margin-bottom: 20px;

  color: ${p => p.theme.colors.newsTxt};

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const NewsDateLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NewsDate = styled.p`
  // position: absolute;

  color: rgba(17, 17, 17, 0.6);

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const NewsLink = styled.a`
  // position: absolute;

  color: #f59256;

  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};

  text-align: right;
  text-decoration-line: underline;

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: #f59256;
    cursor: pointer;
    transition: ${p => p.theme.transition.main};
    box-shadow: ${p => p.theme.shadows.section};
`;
