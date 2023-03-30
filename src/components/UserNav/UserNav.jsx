import { StyledNavLink, AvatarIcon } from 'components/UserNav/UserNav.styled';
import Avatar from '../../images/Avatar.png';

export const UserNav = ({ setOpen }) => {
  return (
    <StyledNavLink
      to="/user"
      onClick={() => {
        setOpen(false);
      }}
    >
      <AvatarIcon src={Avatar} alt="avatar" />
      Account
    </StyledNavLink>
  );
};
