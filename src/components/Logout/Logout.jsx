import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, LogoutIcon } from './Logout.styled';
// import { ReactComponent as LogoutIcon } from 'images/svg/logout.svg';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogoutButton onClick={handleLogOut}>
      <LogoutIcon />
      <span>Log Out</span>
    </LogoutButton>
  );
};

export default Logout;
