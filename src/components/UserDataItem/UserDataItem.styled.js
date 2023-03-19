import styled from 'styled-components';

export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const InfoButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.circular};
`;
