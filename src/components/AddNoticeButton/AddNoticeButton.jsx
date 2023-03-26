import { AddCardIcon } from "./AddNoticeButton.styled";

import { useMedia } from 'react-use';
import { AddPetButton, AddButtonBox } from './AddNoticeButton.styled';

export const AddNoticeButton = ({ handleModalToggle }) => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <AddButtonBox>
      {!isMobile && 'Add pet'}
      <AddPetButton type="button" onClick={handleModalToggle}>
        <AddCardIcon />
        {isMobile && 'Add pet'}
      </AddPetButton>
    </AddButtonBox>
  );
};

export default AddNoticeButton; 