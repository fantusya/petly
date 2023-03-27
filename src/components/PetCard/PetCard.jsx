import { DEFAULT_IMAGE } from 'constants/urls';
import { Box } from 'components/Box/Box';
import { useTranslation } from 'react-i18next';

import {
  CardWrapper,
  Image,
  PetInfo,
  PetTitle,
  BtnDelete,
  DeleteIcon,
} from './PetCard.styled';

export const PetCard = () => {
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <Box pt={20} border="normal" borderColor="transparent">
        <Image src={DEFAULT_IMAGE} alt="My pet" width={240} />
      </Box>

      <Box pt={20} position="relative">
        <PetInfo>
          <PetTitle>{t('Name')}: </PetTitle>
          Jack
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Date_of_birth')}: </PetTitle>
          22.04.2018
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Breed')}: </PetTitle>
          Persian cat
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Comments')}: </PetTitle>
          Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
          consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
          sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem
          ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
        </PetInfo>

        <BtnDelete type="button">
          <DeleteIcon width={20} height={20} />
        </BtnDelete>
      </Box>
    </CardWrapper>
  );
};

export default PetCard;
