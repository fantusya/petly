import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import emptyPets from 'images/emptyPets.jpg';

import { List, Items, Img } from './PetsList.styled';
import PetCard from '../PetCard';

export const PetsList = () => {
  const pets = useSelector(selectUser).myPets;

  const card = pets?.map(pet => {
    return (
      <Items key={pet._id}>
        <PetCard pet={pet} />
      </Items>
    );
  });

  return (
    <>
      {pets?.length === 0 && <Img src={emptyPets} alt="No pets were added" />}
      <List>{card}</List>
    </>
  );
};

export default PetsList;
