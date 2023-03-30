import { AuthNavWrapp, StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import { useTranslation } from 'react-i18next';

export const AuthNav = ({ setOpen }) => {
  const { t } = useTranslation();

  return (
    <AuthNavWrapp>
      <StyledNavLink
        to="/login"
        onClick={() => {
          setOpen(false);
        }}
      >
        {t('Login')}
      </StyledNavLink>
      <StyledNavLink
        to="/register"
        onClick={() => {
          setOpen(false);
        }}
      >
        {t('Registration')}
      </StyledNavLink>
    </AuthNavWrapp>
  );
};
