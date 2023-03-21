import styled from 'styled-components';

const Label = styled.span`
  padding-top: 6px;
  padding-bottom: 6px;
  width: 158px;

  border-radius: 0px 40px 40px 0px;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.cardLabelBg};
  backdrop-filter: blur(2px);

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.333;
  letter-spacing: ${p => p.theme.letterSpacing.text};
  text-align: center;
`;

export default Label;
