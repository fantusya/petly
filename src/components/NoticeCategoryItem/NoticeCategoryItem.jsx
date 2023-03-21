import { Box } from 'components/Box/Box';
import {
  NoticesItem,
  Wrapper,
  ItemContent,
  ItemRecords,
  ItemTitle,
  ItemСharacteristic,
  NoticeButton,
  DeleteIcon,
  AddFavoriteIcon,
  AddFavoriteButton,
} from './NoticeCategoryItem.styled';
import { Label } from 'components/commonComponents';

export const NoticeCategoryItem = ({ stateHandler }) => {
  const isLogged = true;
  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';

  return (
    <NoticesItem>
      <Wrapper img={imagePath}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="12px"
          pr="12px"
        >
          <Label>Sell</Label>
          <AddFavoriteButton>
            <AddFavoriteIcon />
          </AddFavoriteButton>
        </Box>
      </Wrapper>
      <ItemContent isLogged={isLogged}>
        <ItemTitle>Cute dog looking for a home</ItemTitle>
        <ItemRecords isLogged={isLogged}>
          <Box as="ul" display="inline-block" width="30%">
            <ItemСharacteristic>Breed:</ItemСharacteristic>
            <ItemСharacteristic>Place:</ItemСharacteristic>
            <ItemСharacteristic>Age:</ItemСharacteristic>
          </Box>
          <Box as="ul" display="inline-block">
            <ItemСharacteristic>Pomeranian</ItemСharacteristic>
            <ItemСharacteristic>Lviv</ItemСharacteristic>
            <ItemСharacteristic>one year</ItemСharacteristic>
          </Box>
        </ItemRecords>
        <Box display="flex" flexDirection="column" alignItems="center">
          <NoticeButton
            isLogged={isLogged}
            onClick={() => stateHandler('noticeDetails')}
          >
            Learn more
          </NoticeButton>
          {isLogged && (
            <NoticeButton>
              Delete <DeleteIcon />
            </NoticeButton>
          )}
        </Box>
      </ItemContent>
    </NoticesItem>
  );
};

export default NoticeCategoryItem;
