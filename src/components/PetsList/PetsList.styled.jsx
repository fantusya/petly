import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5] - 10}px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: ${p => p.theme.space[5] - 8}px;
`;

export const Items = styled.li`
  margin-bottom: ${p => p.theme.space[4] + 4}px;

  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: ${p => p.theme.space[4] + 6}px;
`;
