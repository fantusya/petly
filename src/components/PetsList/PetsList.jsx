import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import emptyPet from 'images/emptyPets.jpg';

import { List, Items, Img, Wrapper } from './PetsList.styled';
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
        <Wrapper>
          <Img src={emptyPet} alt="emptyPet" width={240} />
          {/* <UserPetScreen>
            <br/>
            🐾Please, add your pet!🐾
          </UserPetScreen> */}
        </Wrapper>
      )}
      <List>{card}</List>
    </>
  );
};

export default PetsList;
