import { useState } from 'react';

import GooglePic from 'images/svg/google-color-svgrepo-com.svg';

import {
  ButtonImg,
  Div,
  OpenEyaIcon,
  ClosedEyaIcon,
  GoogleImg,
} from 'pages/RegisterPage/RegisterPage.styled';

import { Error, Input, Button } from 'pages/authFormStyle.styled';
import { GoogleLoginButton } from 'pages/LoginPage/LoginPage.styled';

export const StepOne = ({ next, isSubmitting }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleShowcConfirm = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  return (
    <>
      <Input type="email" name="email" placeholder="Email" />
      <Error name="email" component="div" />
      <Div>
        <Input
          // type="password"
          id="password"
          name="password"
          placeholder="Password"
          type={passwordVisibility ? 'text' : 'password'}
        ></Input>
        <ButtonImg type="button" onClick={toggleShowPassword}>
          {passwordVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </ButtonImg>
        <Error name="password" component="div" />
      </Div>
      <Div>
        <Input
          // type="password"
          id="confirm"
          type={confirmVisibility ? 'text' : 'password'}
          name="confirm"
          placeholder="Confirm Password"
        />
        <ButtonImg type="button" onClick={toggleShowcConfirm}>
          {confirmVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </ButtonImg>
        <Error name="confirm" component="div" />
      </Div>
      <Button type="submit" onClick={next} disabled={isSubmitting}>
        Next
      </Button>
      <GoogleLoginButton href="https://petly-gd7x.onrender.com/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        Signup with Google
      </GoogleLoginButton>
    </>
  );
};
export default StepOne;
