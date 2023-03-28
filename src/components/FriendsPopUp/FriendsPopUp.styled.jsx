import styled from 'styled-components';

export const TimeList = styled.ul`
  position: absolute;
  display: none;

  width: 120px;
  padding: ${p => p.theme.space[3] + 4}px;

  border: ${p => p.theme.borders.input};
  border-radius: 8px;

  background-color: ${p => p.theme.colors.white};

  font-size: ${p => p.theme.fontSizes[0]};
`;

export const ItemTime = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }

  &:nth-child(${p => p.currentDayOfWeek}) {
    color: ${p => p.theme.colors.accent};

    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
