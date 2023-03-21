import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 20px;
  padding-right: 25px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-left: 32px;
    padding-right: 37px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;
