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
import CustomField from 'pages/authFormStyle.styled';
import { Error, Button } from 'pages/authFormStyle.styled';
import { GoogleLoginButton } from 'pages/LoginPage/LoginPage.styled';

export const StepOne = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const { t } = useTranslation();

  const toggleShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleShowcConfirm = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  console.log(props.isValid);
  return (
    <>
      <CustomField
        type="email"
        name="email"
        placeholder="Email"
        errors={props.errors}
        touched={props.touched}
        required
      />
      <Error name="email" component="div" />
      <Div>
        <CustomField
          id="password"
          name="password"
          placeholder={t('Password')}
          type={passwordVisibility ? 'text' : 'password'}
          errors={props.errors}
          touched={props.touched}
          required
        />
        <ButtonImg type="button" onClick={toggleShowPassword}>
          {passwordVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </ButtonImg>
        <Error name="password" component="div" />
      </Div>
      <Div>
        <CustomField
          id="confirm"
          type={confirmVisibility ? 'text' : 'password'}
          name="confirm"
          placeholder="Confirm Password"
          errors={props.errors}
          touched={props.touched}
          required
        />
        <ButtonImg type="button" onClick={toggleShowcConfirm}>
          {confirmVisibility ? <OpenEyaIcon /> : <ClosedEyaIcon />}
        </ButtonImg>
        <Error name="confirm" component="div" />
      </Div>
      <Button type="submit" onClick={props.next} disabled={props.isValid}>
        Next
      </Button>
      <GoogleLoginButton href="https://petly-gd7x.onrender.com/api/users/google">
        <GoogleImg src={GooglePic} alt="Google" />
        {t('Signup_with_Google')}
      </GoogleLoginButton>
    </>
  );
};
export default StepOne;
