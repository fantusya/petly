import { useSelector } from 'react-redux';
import {
  selectOwnNotices,
  selectFavoriteNotices,
  selectIsLoading,
  selectError,
  selectQuery,
} from 'redux/notices/selectors';

export const useNotices = () => {
  const ownNotices = useSelector(selectOwnNotices);
  const favoriteNotices = useSelector(selectFavoriteNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    ownNotices,
    favoriteNotices,
    isLoading,
    error,
    query,
  };
};
