import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // display: ${open => (!open ? 'none' : 'block')};
  padding-top: 40px;
  background: ${p => p.theme.colors.background};
  transform: ${({ open }) => (!open ? 'translateX(100%)' : 'translateX(0)')};

  height: calc(100vh - 63px);
  text-align: center;
  position: absolute;
  overflow-y: scroll;
  // overflow-y: hidden;
  top: 63px;
  width: 100%;
  left: ${({ open }) => (!open ? '100%' : '0')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding-top: 130px;
    top: 100%;
    height: 100vh;
    left: ${({ open }) => (!open ? '100%' : '0')};
  }
  // @media (max-width: 1279px) {
  //   // width: 100%;
  //   dispaly: none;
  // }
  a {
    transition: all 0.3s linear;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  &:hover div {
    background: #f59256;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    right: 32px;
    top: 31px;
  }

  div {
    width: 30px;
    height: 3.5px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
