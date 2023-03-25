import { Container } from 'globalStyles/globalStyle';
import { NoticesPageMain } from './NoticesPage.styled';
import { Box } from 'components/Box/Box';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { useState, useEffect, Suspense } from 'react';

// import { useDispatch } from 'react-redux';
// import { getFavorites } from 'redux/notices/operations';

export const NoticesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/notices') {
      navigate('/notices/sell', { replace: true });
    }
  }, [location.pathname, navigate]);
  const [request, setRequest] = useState('');

  const handleFormSubmit = value => {
    if (request !== value) {
      setRequest(value);
    } else {
      console.log('ви переглядаєте ' + value);
      return;
    }
  };

  return (
    <main>
      <Box as="section" pt={['100px', null, '160px', '127px']}>
        <Container>
          <PageTitle>Find your favorite pet</PageTitle>
          <SearchBar onSubmit={handleFormSubmit} />
          <NoticesCategoriesNav />
          <NoticesPageMain>
            <Suspense>
              <Outlet />
            </Suspense>
            {/* <NoticesCategoriesList /> */}
          </NoticesPageMain>
        </Container>
      </Box>
    </main>
  );
};

export default NoticesPage;
