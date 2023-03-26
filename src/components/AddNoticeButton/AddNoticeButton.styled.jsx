import styled from 'styled-components';
import { ReactComponent as Plus } from 'images/svg/addCard.svg';

export const AddButtonBox = styled.div`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.4;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const AddPetButton = styled.button`
  border: ${p => p.theme.borders.none};;
  width: 80px;
  height: 80px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.circular};
  background-color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
  position: relative;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    // background: linear-gradient(
    //   120deg,
    //   ${p => p.theme.colors.transparent},
    //   ${p => p.theme.colors.cardLabelBg},
    //   ${p => p.theme.colors.transparent}
    // );
    transition: all ${p => p.theme.transition.main};
  }
  @media screen and (max-width: 767px) {
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: 99;
  }
`;

export const AddCardIcon = styled(Plus)`
    fill: currentColor;
    width: 28px;
    height: 28px;
    @media (min-width: ${p => p.theme.breakpoints[1]}) {
      width: 24px;
      height: 24px;
    }
`;