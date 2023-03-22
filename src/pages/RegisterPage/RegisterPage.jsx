import {
  H2,
  Wrapper,
  Input,
  RegisterForm,
  RegisterButton,
  Text,
  Error,
} from 'pages/RegisterPage/RegisterPage.styled';
import { Formik } from 'formik';

import { Container } from 'globalStyles/globalStyle';
import registerValidationSchema from 'helpers/validationSchemas/RegisterValidationSchema';
import { useState } from 'react';
// import RouteFormLoginRegister from 'pages/routeFormLoginRegister';

const initialValues = {
  email: '',
  password: '',
  confirm: '',
  name: '',
  city: '',
  phone: '',
};

export const RegisterPage = () => {
  const [currentStep, setCarrentStep] = useState(0);

  const handleNextStep = () => {
    setCarrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCarrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} />,
    <StepTwo back={handlePrevStep} />,
  ];

  const handleSubmit = (value, { resetForm }) => {
    resetForm();

    console.log(value);
    console.log(value.password);
  };

  return (
    <section>
      <Container>
        <Wrapper>
          <>
            <H2>Registration</H2>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={registerValidationSchema}
              autoComplete="off"
            >
              <RegisterForm>{steps[currentStep]}</RegisterForm>
            </Formik>
            <Text>
              Already have an account?
              <a href="http://localhost:3000/petly">Login</a>
            </Text>

            {/* <RouteFormLoginRegister
            link="/login"
            question="Already have an account??"
            pageName="login"
          /> */}
          </>
        </Wrapper>
      </Container>
    </section>
  );
};

const StepOne = props => {
  return (
    <>
      <Input type="email" name="email" placeholder="Email" autoComplete="off" />
      <Error name="email" component="div" />
      <Input type="password" name="password" placeholder="Password" />
      <Error name="password" component="div" />
      <Input type="password" name="confirm" placeholder="Confirm Password" />
      <Error name="confirm" component="div" />
      <RegisterButton type="button" onClick={props.next} id="next">
        Next
      </RegisterButton>
    </>
  );
};
const StepTwo = props => {
  return (
    <>
      <Input type="text" name="name" placeholder="Name" />
      <Error name="name" component="div" />
      <Input type="text" name="city" placeholder="City, region" />
      <Error name="city" component="div" />
      <Input type="tel" name="phone" placeholder="Mobile phone" />
      <Error name="phone" component="div" />

      <RegisterButton type="submit">Register</RegisterButton>
      <RegisterButton type="button" onClick={props.back}>
        Back
      </RegisterButton>
    </>
  );
};

export default RegisterPage;

// --------------НАБРОСКИ------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// {
/* <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <Error name="email" component="div" />
                <Input type="password" name="password" placeholder="Password" />
                <Error name="password" component="div" />
                <Input
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                />
                <Error name="confirm" component="div" />
                <Input type="text" name="name" placeholder="Name" />
                <Error name="name" component="div" />
                <Input type="text" name="city" placeholder="City, region" />
                <Error name="city" component="div" />
                <Input type="tel" name="phone" placeholder="Mobile phone" />
                <Error name="phone" component="div" />
                <RegisterButton type="submit">Register</RegisterButton>
                <RegisterButton type="button" disabled>
                  Next
                </RegisterButton>
                <RegisterButton type="button">Back</RegisterButton> */
// }
