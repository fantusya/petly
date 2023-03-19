import styled from 'styled-components';

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;
`;

export const InfoField = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoProp = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.text};
`;

export const InfoInput = styled.input`
  min-width: 159px;
  padding: 4px 18px;
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.background};
`;

export const InfoButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.circular};
  border: ${p => p.theme.borders.none};

  background-color: ${p => p.theme.colors.background};
`;
