import { useState } from 'react';

import GooglePic from 'images/svg/google-color-svgrepo-com.svg';

import {
  InputReg,
  RegisterButton,
  ErrorValid,
  Button,
  Div,
  OpenEyaIcon,
  ClosedEyaIcon,
  GoogleRegisterButton,
  GoogleImg,
} from 'pages/RegisterPage/RegisterPage.styled';

export const StepOne = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <Div>
        <InputReg type="email" name="email" placeholder="Email" />
        <ErrorValid name="email" component="div" />
      </Div>
      <Div>
        <InputReg
          // type="password"
          id="password"
          name="password"
          placeholder="Password"
          type={passwordVisibility ? 'text' : 'password'}
        ></InputReg>
        <Button type="button" onClick={toggleShowPassword}>
          {passwordVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </Button>{' '}
        <ErrorValid name="password" component="div" />
      </Div>
      <Div>
        <InputReg
          // type="password"
          type={passwordVisibility ? 'text' : 'password'}
          name="confirm"
          placeholder="Confirm Password"
        />
        <ErrorValid name="confirm" component="div" />
      </Div>

      <RegisterButton type="button" onClick={props.next} disabled={false}>
        Next
      </RegisterButton>
      <GoogleRegisterButton href="https://petly-gd7x.onrender.com/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        Signup with Google
      </GoogleRegisterButton>
    </>
  );
};
export default StepOne;
