import NoticesCategoriesList from 'components/NoticesCategoriesList';
import { Container } from 'globalStyles/globalStyle';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFavorites } from 'redux/notices/operations';
import { NoticePageContainer, NoticesPageMain } from './NoticesPage.styled';

export const NoticesPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  

  return (
    <NoticePageContainer>
      <Container>
        <NoticesSearch>Find your favorite pet</NoticesSearch>
        <NoticesCategoriesNav location={location} />
        <NoticesPageMain>
          <NoticesCategoriesList />
        </NoticesPageMain>
      </Container>
    </NoticePageContainer>
  );
};

export default NoticesPage;
