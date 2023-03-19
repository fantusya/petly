import { StyledNavLink, AvatarIcon } from 'components/UserNav/UserNav.styled';
import Avatar from '../../images/Avatar.png';

export const UserNav = () => {
  return (
    <StyledNavLink to="/user">
      <AvatarIcon src={Avatar} alt="avatar" />
    </StyledNavLink>
  );
};
