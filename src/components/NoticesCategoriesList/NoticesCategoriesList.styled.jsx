import styled from 'styled-components';

export const NoticesCardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: stretch;
  cursor: ${p => (p.isLoading ? 'wait' : 'default')};
`;
