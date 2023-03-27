import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { Box } from 'components/Box/Box';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
import PetsList from '../PetsList';
import {
  PetsWrapper,
  PetsContainer,
  Title,
  TitleBtn,
  Button,
  AddIcon,
} from './PetsData.styled';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  const pets = useSelector(selectUser).myPets;
  console.log('pets', pets);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <PetsWrapper>
      <PetsContainer>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Title>My pets:</Title>
          <Box display="flex" alignItems="center" gridGap="15px">
            <div>
              <TitleBtn>Add pet</TitleBtn>
            </div>
            <Button type="button" onClick={toogleModal}>
              <AddIcon width={24} height={24} />
            </Button>
          </Box>
        </Box>

        {showModal && <ModalAddsPet onCloseModal={toogleModal} />}
        <PetsList />
      </PetsContainer>
    </PetsWrapper>
  );
};

export default PetsData;
