import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleShowcConfirm = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  return (
    <>
      <Input type="email" name="email" placeholder={t('Email')} />
      <Error name="email" component="div" />
      <Div>
        <Input
          // type="password"
          id="password"
          name="password"
          placeholder={t('Password')}
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
          placeholder={t('Confirm_Password')}
        />
        <ButtonImg type="button" onClick={toggleShowcConfirm}>
          {confirmVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </ButtonImg>
        <Error name="confirm" component="div" />
      </Div>
      <Button type="submit" onClick={next} disabled={isSubmitting}>
        {t('Next')}
      </Button>
      <GoogleLoginButton href="https://petly-gd7x.onrender.com/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        {t('Signup_with_Google')}
      </GoogleLoginButton>
    </>
  );
};
export default StepOne;
