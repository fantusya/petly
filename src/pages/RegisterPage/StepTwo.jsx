import { Error, Input, Button } from 'pages/authFormStyle.styled';

const StepTwo = props => {
  return (
    <>
      <Input type="text" name="name" placeholder="Name" />
      <Error name="name" component="div" />

      <Input type="text" name="city" placeholder="City, region" />
      <Error name="city" component="div" />

      <Input type="tel" name="phone" placeholder="Mobile phone" />
      <Error name="phone" component="div" />

      <Button type="submit">Register</Button>
      <Button type="button" onClick={props.back}>
        Back
      </Button>
    </>
  );
};
export default StepTwo;
