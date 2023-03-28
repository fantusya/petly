import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { List, Items } from './PetsList.styled';
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
      {card.length < 0 && (
        <h2>
          You do not have any pets added to your profile page yet. Please, add
          your pet!
        </h2>
      )}

      <List>{card}</List>
    </>
  );
};

export default PetsList;
