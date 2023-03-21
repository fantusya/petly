import { Items } from './PetsList.styled';
import PetCard from '../PetCard';

export const PetsList = () => {
  return (
    <ul>
      <Items>
        <PetCard />
      </Items>

      <Items>
        <PetCard />
      </Items>
    </ul>
  );
};

export default PetsList;
