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
  gap: 5px;
  height: 22px;
  margin: 0 24px 36px auto;
  border: none;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: 1.3;
  color: ${p => p.theme.colors.text};

  background-color: transparent;
`;

export const UserDataList = styled.ul`
  margin-bottom: 44px;
`;
