import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import { ReactComponent as Trash } from 'images/svg/hoveredTrash.svg';
import { ReactComponent as Heart } from 'images/svg/notFavorite.svg';
import { heartbeat } from 'keyframes';

export const NoticesItem = styled.li`
  width: 280px;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  background-color: ${p => p.theme.colors.white};

  font-family: ${p => p.theme.fonts.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 336px;

    border-radius: 0px 0px 40px 40px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 288px;
  }
`;

export const Wrapper = styled(Box)`
  height: 288px;

  background-image: url(${props => props.img});
  background-size: cover;
`;

export const ItemContent = styled(Box)`
  padding-top: 20px;
  padding-right: 16px;
  padding-bottom: ${props => (props.isLogged ? '12px' : '32px')};
  padding-left: 16px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-right: 20px;
    padding-left: 20px;

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ItemTitle = styled(Box)`
  margin-bottom: 20px;

  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[6]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.357;
  letter-spacing: ${p => p.theme.letterSpacing.title};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // overflow: hidden;
  }
`;

export const ItemRecords = styled.ul`
  margin-bottom: ${props => (props.isOwn ? '20px' : '50px')};

  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const Record = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const RecordName = styled.span`
  display: inline-block;
  width: 30%;
`;

export const RecordContent = styled.span`
  display: inline-block;
  width: 70%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DeleteIcon = styled(Trash)`
  width: 16px;
  height: 18px;
  margin-left: 15px;

  & path {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const NoticeButton = styled.button`
  width: 100%;
  height: 38px;
  margin-bottom: ${props => (props.isLogged ? '12px' : '0px')};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentBtn};
    border: 2px solid ${p => p.theme.colors.accentBtn};

    ${DeleteIcon} path {
      fill: ${p => p.theme.colors.accentBtn};
      transition: ${p => p.theme.transition.main};
    }
  }

  transition: ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 248px;
    margin-bottom: ${props => (props.isLogged ? '20px' : '0px')};
  }
`;

export const AddFavoriteIcon = styled(Heart)`
  width: 24px;
  height: 22px;

  fill: ${p => p.theme.colors.white};
`;

export const RemoveFavoriteIcon = styled(Heart)`
  width: 24px;
  height: 22px;

  fill: ${p => p.theme.colors.accent};
`;

export const AddFavoriteButton = styled.button`
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border-style: none;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  cursor: pointer;

  &:hover {
    animation: ${heartbeat} 2s linear infinite;

    ${AddFavoriteIcon} path {
      fill: ${p => p.theme.colors.accent};
      transition: ${p => p.theme.transition.main};
    }
    ${RemoveFavoriteIcon} path {
      fill: ${p => p.theme.colors.white};
      transition: ${p => p.theme.transition.main};
    }
  }

  transition: ${p => p.theme.transition.main};
`;

export const ConfirmWrapper = styled(Box)`
  width: 100%;
  height: 38px;
  margin-bottom: ${props => (props.isLogged ? '12px' : '0px')};

  display: flex;
  justify-content: space-between;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 248px;
    margin-bottom: ${props => (props.isLogged ? '20px' : '0px')};
  }
`;
