import { StyledNavLink, AvatarIcon } from 'components/UserNav/UserNav.styled';
import Avatar from 'images/Avatar.png';
import { useTranslation } from 'react-i18next';

export const UserNav = ({ setOpen }) => {
  const { t } = useTranslation();

  return (
    <StyledNavLink
      to="/user"
      onClick={() => {
        setOpen(false);
      }}
    >
      <AvatarIcon src={Avatar} alt="avatar" />
      {t('Account')}
    </StyledNavLink>
  );
};
