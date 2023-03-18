import styled from 'styled-components';

export const UserText = styled.p`
  padding-top: 61px;
  margin-bottom: 18px;

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[4]};

  color: ${p => p.theme.colors.black};
`;

export const Section = styled.section`
  padding: 20px 12px 20px 16px;

  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.section};

  background-color: ${p => p.theme.colors.white};
`;

export const Avatar = styled.div`
  width: 233px;
  height: 233px;
  margin: 0 auto 12px auto;
  border-radius: ${p => p.theme.radii.circular};
  box-shadow: ${p => p.theme.shadows.avatar};

  background-color: ${p => p.theme.colors.background};
`;
