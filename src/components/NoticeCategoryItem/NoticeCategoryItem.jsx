import { Box } from 'components/Box/Box';
import {
  NoticesItem,
  Wrapper,
  ItemContent,
  ItemTitle,
  ItemСharacteristic,
  AddFavoriteIcon,
  AddFavoriteButton,
} from './NoticeCategoryItem.styled';
import { Label } from 'components/commonComponents';

import { useAuth } from 'hooks';

export const NoticeCategoryItem = ({
  notice: { category, title, breed, location, birthDate, photoURL },
}) => {
  const { isLoggedIn } = useAuth();

  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';

  return (
    <NoticesItem>
      <Wrapper img={photoURL || imagePath}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="12px"
          pr="12px"
        >
          <Label>{category}</Label>
          <AddFavoriteButton>
            <AddFavoriteIcon />
          </AddFavoriteButton>
        </Box>
      </Wrapper>
      <ItemContent isLogged={isLoggedIn}>
        <ItemTitle>{title}</ItemTitle>
        <Box as="ul" display="inline-block" width="30%">
          <ItemСharacteristic>Breed:</ItemСharacteristic>
          <ItemСharacteristic>Place:</ItemСharacteristic>
          <ItemСharacteristic>Age:</ItemСharacteristic>
        </Box>
        <Box as="ul" display="inline-block">
          <ItemСharacteristic>{breed}</ItemСharacteristic>
          <ItemСharacteristic>{location}</ItemСharacteristic>
          <ItemСharacteristic>{birthDate} year</ItemСharacteristic>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* <NoticeButton
            isLogged={isLoggedIn}
            onClick={() => stateHandler('noticeDetails')}
          >
            Learn more
          </NoticeButton>
          {isLoggedIn && (
            <NoticeButton>
              Delete <DeleteIcon />
            </NoticeButton>
          )} */}
        </Box>
      </ItemContent>
    </NoticesItem>
  );
};

export default NoticeCategoryItem;
