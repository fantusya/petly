import { BsPlusLg } from 'react-icons/bs';

import { Box } from 'components/Box/Box';
import PetsList from '../PetsList';
import { PetsWrapper, Title, Button } from './PetsData.styled';

import { Container } from 'globalStyles/globalStyle';

export const PetsData = () => {
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
            <Button type="button">
              <BsPlusLg size={24} />
            </Button>
          </Box>
        </Box>
        <PetsList />
      </Container>
    </PetsWrapper>
  );
};

export default PetsData;
