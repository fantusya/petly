import styled from 'styled-components';

export const UserTitle = styled.h2`
  margin-bottom: 18px;

  font-family: ${p => p.theme.fonts.textMedium};
  font-size: ${p => p.theme.fontSizes[4]};

  color: ${p => p.theme.colors.black};
`;

export const UserSection = styled.div`
  padding: 20px 12px 20px 16px;

  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.section};

  background-color: ${p => p.theme.colors.white};
`;

export const UserPhoto = styled.div`
  width: 233px;
  height: 233px;
  margin: 0 auto 12px;
  border-radius: ${p => p.theme.radii.circular};
  box-shadow: ${p => p.theme.shadows.avatar};

  background-color: ${p => p.theme.colors.background};
`;

export const UserPhotoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 24px 36px auto;
  border: none;
  cursor: pointer;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.transparent};
`;

export const UserDataList = styled.ul`
  margin-bottom: 42px;
`;
