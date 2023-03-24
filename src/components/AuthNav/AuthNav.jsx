import { AuthNavWrapp, StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import Media from 'react-media';

export const AuthNav = ({ setOpen }) => {
  return (
    <AuthNavWrapp>
      <StyledNavLink
        to="/login"
        onClick={() => {
          <Media queries={{ small: { maxWidth: 767.9 } }}>
            {matches => matches.small || setOpen(false)}
          </Media>;
        }}
      >
        Login
      </StyledNavLink>
      <StyledNavLink
        to="/register"
        onClick={() => {
          <Media queries={{ small: { maxWidth: 767.9 } }}>
            {matches => matches.small || setOpen(false)}
          </Media>;
        }}
      >
        Registration
      </StyledNavLink>
    </AuthNavWrapp>
  );
};
