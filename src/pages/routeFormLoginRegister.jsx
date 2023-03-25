import { SpanText, LinkToOtherPage, TextBox } from './authFormStyle.styled';

const RouteFormLoginRegister = ({ link, question, pageName }) => {
  return (
    <TextBox>
      <SpanText>{question}</SpanText>
      <LinkToOtherPage to={link}>{pageName}</LinkToOtherPage>
    </TextBox>
  );
};
export default RouteFormLoginRegister;
