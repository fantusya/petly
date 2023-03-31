import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const handleModalToggle = () => {
    setOpen(true);
  };

  const handleButtonToggle = () => {
    setOpen(false);
  };

  return (
    <PetsWrapper>
      <PetsContainer>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Title>{t('My_pets')}:</Title>
          <Box display="flex" alignItems="center" gridGap="15px">
            <div>
              <TitleBtn>{t('Add_pet')}</TitleBtn>
            </div>
            {open ? (
              <ModalAddsPet handleButtonToggle={handleButtonToggle} />
            ) : (
              <Button onClick={handleModalToggle}>
                <AddIcon width={24} height={24} />
              </Button>
            )}
          </Box>
        </Box>
        <PetsList />
      </PetsContainer>
    </PetsWrapper>
  );
};

export default PetsData;
