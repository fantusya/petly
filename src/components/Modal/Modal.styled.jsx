import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* padding: 20px 0; */
  background-color: ${p => p.theme.colors.modalBackdrop};
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 10;
  padding: 20px;
`;

export const ModalWindow = styled.div`
  overflow: auto;
  // width: 100%;
  width: 280px;
  max-width: 608px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* max-height: 100%; */
  max-height: 95%;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};
  /* &::-webkit-scrollbar {
    width: 0;
  } */

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: 608px;
    /* width: auto; */
    border-radius: ${p => p.theme.radii.big};
  }
`;
