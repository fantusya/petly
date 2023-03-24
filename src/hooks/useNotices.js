import { useSelector } from 'react-redux';
import {
  selectOwnNotices,
  selectFavoriteNotices,
  selectIsLoading,
  selectError,
} from 'redux/notices/selectors';

export const useAuth = () => {
  const ownNotices = useSelector(selectOwnNotices);
  const favoriteNotices = useSelector(selectFavoriteNotices);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    ownNotices,
    favoriteNotices,
    isLoading,
    error,
  };
};
