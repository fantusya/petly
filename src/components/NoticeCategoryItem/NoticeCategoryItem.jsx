import { Box } from 'components/Box/Box';
import {
  NoticesItem,
  Wrapper,
  ItemLabel,
  ItemContent,
  NoticeContent,
  ItemTitle,
  NoticeContentItem,
  Button,
  TrashIcon,
  FavoriteIcon,
  FavoriteButton,
} from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = () => {
  const isLogged = true;
  const imagePath =
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYBofWLL._CR0,204,1224,1224_UX256.jpg';

  return (
    <NoticesItem>
      <Wrapper img={imagePath} isLogged={isLogged}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="12px"
          pr="12px"
        >
          <ItemLabel>Sell</ItemLabel>
          <FavoriteButton>
            <FavoriteIcon />
          </FavoriteButton>
        </Box>
      </Wrapper>
      <ItemContent isLogged={isLogged}>
        <ItemTitle>Cute dog looking for a home</ItemTitle>
        <NoticeContent isLogged={isLogged}>
          <Box as="ul" display="inline-block" width="30%">
            <NoticeContentItem>Breed:</NoticeContentItem>
            <NoticeContentItem>Place:</NoticeContentItem>
            <NoticeContentItem>Age:</NoticeContentItem>
          </Box>
          <Box as="ul" display="inline-block">
            <NoticeContentItem>Pomeranian</NoticeContentItem>
            <NoticeContentItem>Lviv</NoticeContentItem>
            <NoticeContentItem>one year</NoticeContentItem>
          </Box>
        </NoticeContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button isLogged={isLogged}>Learn more</Button>
          {isLogged && (
            <Button>
              Delete <TrashIcon />
            </Button>
          )}
        </Box>
      </ItemContent>
    </NoticesItem>
  );
};

export default NoticeCategoryItem;
