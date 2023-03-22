import { StyledNavLink, AvatarIcon } from 'components/UserNav/UserNav.styled';
import Avatar from '../../images/Avatar.png';
import Media from 'react-media';

export const UserNav = ({ setOpen }) => {
  return (
    <StyledNavLink
      to="/user"
      onClick={() => {
        <Media queries={{ small: { maxWidth: 767.9 } }}>
          {matches => matches.small && setOpen(false)}
        </Media>;
      }}
    >
      <AvatarIcon src={Avatar} alt="avatar" />
    </StyledNavLink>
  );
};
