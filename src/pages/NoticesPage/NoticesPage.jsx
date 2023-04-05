import { Container } from 'globalStyles/globalStyle';
import { NoticesPageMain } from './NoticesPage.styled';
import { Box } from 'components/Box/Box';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { useState, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export const NoticesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Find pet`;

    if (location.pathname === '/notices') {
      navigate('/notices/sell', { replace: true });
    }
  }, [location.pathname, navigate]);

  const [request, setRequest] = useState('');

  const handleFormSubmit = value => {
    if (request !== value) {
      setRequest(value);
    } else {
      return;
    }
  };

  return (
    <main>
      <Box as="section" pt={['100px', null, '160px', '127px']}>
        <Container>
          <PageTitle>{t('Find_pet')}</PageTitle>
          <SearchBar onSubmit={handleFormSubmit} />
          <NoticesCategoriesNav />
          <NoticesPageMain>
            <Suspense>
              <Outlet />
            </Suspense>
          </NoticesPageMain>
        </Container>
      </Box>
    </main>
  );
};

export default NoticesPage;
