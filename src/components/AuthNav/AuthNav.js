import { AuthNavWrapp, StyledNavLink } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapp>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Registration</StyledNavLink>
    </AuthNavWrapp>
  );
};
