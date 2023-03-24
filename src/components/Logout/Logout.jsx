import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, LogoutIcon } from './Logout.styled';

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <LogoutButton type="button" onClick={() => dispatch(logOut())}>
      <LogoutIcon />
      <span>Log Out</span>
    </LogoutButton>
  );
};

export default Logout;
