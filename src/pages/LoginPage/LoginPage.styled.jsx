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
  padding: 8px;
  margin-top: 12px;

  /* width: 280px; */

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  &:hover {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.text};
  text-decoration: none;
`;

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;
