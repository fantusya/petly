import styled from 'styled-components';

export const Items = styled.li`
  margin-bottom: ${p => p.theme.space[4] + 4}px;

  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
