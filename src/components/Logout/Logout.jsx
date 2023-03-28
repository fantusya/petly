import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, LogoutIcon } from './Logout.styled';
import { useTranslation } from 'react-i18next';

// import { ReactComponent as LogoutIcon } from 'images/svg/logout.svg';

export const Logout = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogoutButton onClick={handleLogOut}>
      <LogoutIcon />
      <span>{t('Log_out')}</span>
    </LogoutButton>
  );
};

export default Logout;
