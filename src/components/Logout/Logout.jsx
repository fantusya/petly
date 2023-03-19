import { LogoutButton } from './Logout.styled';

export const Logout = () => {
  return (
    <LogoutButton>
      <svg width="18" height="18">
        <use></use>
      </svg>
      Log Out
    </LogoutButton>
  );
};

export default Logout;
