import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { List, Items, Wrapper, UserPetScreen } from './PetsList.styled';
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
      {pets?.length === 0 && (
        <Wrapper p={20}>
          <UserPetScreen>
            🐾You do not have any pets added to your profile page yet.
            <br />
            <br />
            Please, add your pet!🐾
          </UserPetScreen>
        </Wrapper>
      )}
      <List>{card}</List>
    </>
  );
};

export default PetsList;
