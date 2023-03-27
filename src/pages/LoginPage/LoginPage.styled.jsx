import { theme } from 'globalStyles/theme';
import styled from 'styled-components';
// import { Field, Form } from 'formik';
// import { theme } from 'globalStyles/theme';

// export const TitleAuth = styled.h1`
//   text-align: center;
//   font-family: ${p => p.theme.fonts.text};
//   margin-bottom: ${p => p.theme.fontSizes[9]};
//   font-size: ${p => p.theme.fontSizes[8]};
// `;
// export const FormCustom = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   font-size: ${p => p.theme.fontSizes[3]};
// `;
// export const LoginButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4px 10px;
//   gap: 8px;
//   border: inherit;
//   border-radius: ${p => p.theme.radii.small};
//   cursor: pointer;

//   color: ${theme.colors.white};
//   background-color: ${p => p.theme.colors.accent};

//   transition: ${theme.transition.main};

//   &:hover,
//   :active {
//     background-color: ${theme.colors.accent};
//     color: ${theme.colors.white};
//   }
// `;

export const GoogleLoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0 9px 0;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[4]};
  text-decoration: none;

  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};

  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color ${p => p.theme.transition.main},
      background-color ${p => p.theme.colors.accent};
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
  }
`;

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;

export const LoginPOsitionBtn = styled.div`
  position: absolute;
  top: -70px;
  left: 45px;
  @media (min-width: ${theme.breakpoints[1]}) {
    top: -70px;
    left: 60px;
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    top: -70px;
    left: 65px;
  }
`;
