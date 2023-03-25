import {
  InputReg,
  RegisterButton,
  ErrorValid,
} from 'pages/RegisterPage/RegisterPage.styled';

const StepTwo = props => {
  return (
    <>
      <InputReg type="text" name="name" placeholder="Name" />
      <ErrorValid name="name" component="div" />
      <InputReg type="text" name="city" placeholder="City, region" />
      <ErrorValid name="city" component="div" />
      <InputReg type="tel" name="phone" placeholder="Mobile phone" />
      <ErrorValid name="phone" component="div" />

      <RegisterButton type="submit">Register</RegisterButton>
      <RegisterButton type="button" onClick={props.back}>
        Back
      </RegisterButton>
    </>
  );
};
export default StepTwo;
