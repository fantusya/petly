import { removePet } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

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

export const PetCard = ({ pet }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { _id, name, birthDate, breed, photoURL, comments } = pet;
  const birthDateToObject = new Date(birthDate);
  const stringifiedToDate = birthDateToObject.toLocaleDateString('ua');
  // console.log('birthDate', birthDate);
  // console.log(typeof birthDate);

  //
  const handleDelete = () => {
    dispatch(removePet(_id));

    toast.success(`You successfully deleted your pet ${name}`);
  };

  return (
    <CardWrapper>
      <Box pt={20} border="normal" borderColor="transparent">
        <Image src={photoURL || DEFAULT_IMAGE} alt="My pet" width={240} />
      </Box>

      <Box pt={20} position="relative">
        <PetInfo>
          <PetTitle>{t('Name')}: </PetTitle>
          {name}
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Date_of_birth')}: </PetTitle>
          {stringifiedToDate}
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Breed')}: </PetTitle>
          {breed}
        </PetInfo>
        <PetInfo>
          <PetTitle>{t('Comments')}: </PetTitle>
          {comments}
        </PetInfo>

        <BtnDelete type="button" onClick={handleDelete}>
          <DeleteIcon width={20} height={20} />
        </BtnDelete>
      </Box>
    </CardWrapper>
  );
};

export default PetCard;
