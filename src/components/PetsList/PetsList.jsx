import { List, Items } from './PetsList.styled';
import PetCard from '../PetCard';

export const PetsList = () => {
  return (
    <List>
      <Items>
        <PetCard />
      </Items>

      <Items>
        <PetCard />
      </Items>
    </List>
  );
};

export default PetsList;
