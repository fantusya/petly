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

export const StepOne = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
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

      <Input
        // type="password"
        type={passwordVisibility ? 'text' : 'password'}
        name="confirm"
        placeholder="Confirm Password"
      />
      <Error name="confirm" component="div" />

      <Button type="button" onClick={props.next} disabled={false}>
        Next
      </Button>

      <GoogleLoginButton href="https://uninterested-hose-newt.cyclic.app/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        Signup with Google
      </GoogleLoginButton>
    </>
  );
};
export default StepOne;
