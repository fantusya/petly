import NoticesCategoriesList from 'components/NoticesCategoriesList';
import { Container } from 'globalStyles/globalStyle';
import { NoticesPageMain } from './NoticesPage.styled';
import { Box } from 'components/Box/Box';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';
import { useLocation } from 'react-router-dom';
// import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
// import { useDispatch } from 'react-redux';
// import { getFavorites } from 'redux/notices/operations';

export const NoticesPage = () => {
  const location = useLocation();
  // const dispatch = useDispatch();

  return (
    <Box as="section" pt={['42px', '58px', '88px']}>
      <Container>
        <PageTitle>Find your favorite pet</PageTitle>
        {/* <SearchBar setNews={setNews} /> */}

        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          <NoticesCategoriesList />
        </NoticesPageMain>
      </Container>
    </Box>
  );
};

export default NoticesPage;
