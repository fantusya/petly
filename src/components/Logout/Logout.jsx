import { LogoutButton, LogoutIcon } from './Logout.styled';
// import { ReactComponent as LogoutIcon } from 'images/svg/logout.svg';

export const Logout = () => {
  return (
    <LogoutButton>
      <LogoutIcon />
      <span>Log Out</span>
    </LogoutButton>
  );
};

export default Logout;
