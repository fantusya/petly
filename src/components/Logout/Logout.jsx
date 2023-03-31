import { LogoutButton, LogoutIcon } from './Logout.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const Logout = ({ onOpen }) => {
  const { t } = useTranslation();

  return (
    <LogoutButton onClick={onOpen}>
      <LogoutIcon />
      <span>{t('Log_out')}</span>
    </LogoutButton>
  );
};

export default Logout;

Logout.propsType = {
  onOpen: PropTypes.func.isRequired,
};
