import { useState } from 'react';

import { Box } from 'components/Box/Box';
import ModalAddsPet from '../ModalAddsPet';
import PetsList from '../PetsList';
import { PetsWrapper, Title, Button, AddIcon } from './PetsData.styled';

import { Container } from 'globalStyles/globalStyle';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <PetsWrapper
    // pt={46}
    // pb={80}
    // flex="0 0 70%"
    // transform="translate(-100%, 0px)"
    >
      <Container>
        <Box
          mb={5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Title>My pets:</Title>
          <Box display="flex" alignItems="center" gridGap="15px">
            <Title>Add pet</Title>
            <Button type="button" onClick={toogleModal}>
              <AddIcon width={24} height={24} />
            </Button>
          </Box>
        </Box>

        {showModal && <ModalAddsPet onCloseModal={toogleModal} />}
        <PetsList />
      </Container>
    </PetsWrapper>
  );
};

export default PetsData;
