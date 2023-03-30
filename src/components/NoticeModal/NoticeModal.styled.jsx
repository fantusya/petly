import styled from 'styled-components';
import { Box } from 'components/Box/Box';

import { ReactComponent as Heart } from '../../images/svg/notFavorite.svg';
import { Label, ModalButton } from 'components/commonComponents';

export const ModalContainer = styled(Box)`
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
  cursor: default;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;

    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const Wrapper = styled(Box)`
  height: 240px;
  padding-top: 20px;
  margin-bottom: 16px;

  border-radius: 0px 0px 40px 40px;

  background-image: url(${props => props.img});
  background-size: cover;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 288px;
    height: 328px;
    margin-right: 20px;
  }
`;

export const ContentWrapper = styled(Box)`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
  }
`;

export const ModalLabel = styled(Label)`
  display: block;

  backdrop-filter: blur(50px);
`;

export const ModalTitle = styled(Box)`
  margin-bottom: 16px;
  max-width: 300px;

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.title};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 20px;
  }
`;

export const ModalRecords = styled.ul`
  margin-bottom: 28px;
  min-width: 240px;

  color: ${p => p.theme.colors.black};

  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.357;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.lineHeights.text};
  }
`;

export const Record = styled.li`
  display: flex;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const RecordName = styled.span`
  display: inline-block;
  width: 40%;
`;

export const RecordContent = styled.span`
  display: inline-block;
  width: 60%;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
`;

export const Link = styled.a`
  display: block;
  color: inherit;
  text-decoration: inherit;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalComments = styled.p`
  margin-bottom: 40px;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.357;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const CommentsBold = styled.span`
  font-weight: 600;
`;

export const AddFavoriteIcon = styled(Heart)`
  width: 16px;
  height: 16px;

  margin-left: 9px;

  & path {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const ModalFavoriteButton = styled(ModalButton)`
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};

    transition: ${p => p.theme.transition.main};

    ${AddFavoriteIcon} path {
      fill: ${p => p.theme.colors.white};
      transition: ${p => p.theme.transition.main};
    }
  }
`;

export const ButtonsWrapper = styled(Box)`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const CloseButtonWrapper = styled(Box)`
  display: flex;
  justify-content: end;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContactButton = styled.a`
  height: 40px;
  width: 100%;
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  text-decoration: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  transition: ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 160px;
    margin-bottom: 0px;
    margin-right: 12px;
  }
`;
