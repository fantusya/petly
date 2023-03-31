import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { useTranslation } from 'react-i18next';
import { ModalText } from './UserModal.styled';
import { ModalButton } from 'components/commonComponents';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

export const UserModal = ({ onClose }) => {
  //   const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    onClose();
    dispatch(logOut());
  };

  return (
    <Box p="32px 16px" textAlign="center">
      <ModalText>🐾 Do you really want to leave?</ModalText>

      <Box display="flex" justifyContent="center" gridGap="24px">
        <ModalButton type="button" onClick={onClose}>
          No
        </ModalButton>
        <ModalButton type="button" onClick={handleLogOut}>
          Yes 🐾
        </ModalButton>
      </Box>
    </Box>
  );
};

export default UserModal;

UserModal.propsType = {
  onClose: PropTypes.func.isRequired,
};
