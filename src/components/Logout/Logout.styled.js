import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
  border: ${p => p.theme.borders.none};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: rgba(17, 17, 17, 0.6);
  background-color: ${p => p.theme.colors.transparent};
`;
