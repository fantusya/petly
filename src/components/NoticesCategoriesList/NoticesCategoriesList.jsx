import { useState, useEffect } from 'react';
import { Status } from 'constants/status';
import { getNoticeByCategory } from 'api/notice';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { useDispatch } from 'react-redux';
// import NoticeModal from 'components/NoticeModal';
import { NoticesCardsList } from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';
import { useNotices } from 'hooks/useNotices';
import { getFavorites } from 'redux/notices/operations';
import { getUserNotices } from 'redux/notices/operations';

export const NoticesCategoriesList = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  // const { ownNotices, favoriteNotices } = useNotices();

  const dispatch = useDispatch();
  const location = useLocation();
  const categoryName = location.pathname.split('/').reverse()[0];
  const { query: search } = useNotices();
  console.log('categoryName', categoryName);

  useEffect(() => {
    async function getNotices() {
      setResults([]);
      setStatus(Status.PENDING);

      try {
        if (page === 0) {
          setPage(1);
          return;
        }

        if (categoryName === 'favorite') {
          dispatch(getFavorites(search, page));
        } else if (categoryName === 'own') {
          dispatch(getUserNotices(search, page));
        } else {
          const notices = await getNoticeByCategory({
            categoryName,
            search,
            page,
          });

          setResults(notices.results);
        }

        // setResults(prevState => [...prevState, ...notices.results]);
        // setResults(notices.results);
        // setTotal(movies.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getNotices();
  }, [categoryName, search, page, dispatch]);

  return (
    <>
      {status === Status.PENDING && <b>LOADING</b>}
      {status === Status.RESOLVED && (
        <NoticesCardsList>
          {results.map(item => (
            <NoticeCategoryItem key={item._id} notice={item} />
          ))}
        </NoticesCardsList>
      )}
      {status === Status.REJECTED && <b>ERROR</b>}
    </>
  );
};

export default NoticesCategoriesList;
