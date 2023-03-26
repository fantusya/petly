import { AuthNavWrapp, StyledNavLink } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = ({ setOpen }) => {
  return (
    <AuthNavWrapp>
      <StyledNavLink
        to="/login"
        onClick={() => {
          setOpen(false);
        }}
      >
        Login
      </StyledNavLink>
      <StyledNavLink
        to="/register"
        onClick={() => {
          setOpen(false);
        }}
      >
        Registration
      </StyledNavLink>
    </AuthNavWrapp>
  );
};
