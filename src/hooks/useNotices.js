import { useSelector } from 'react-redux';
import {
  selectNotices,
  selectIsLoading,
  selectError,
} from 'redux/notices/selectors';

export const useAuth = () => {
  const noticesItems = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    noticesItems,
    isLoading,
    error,
  };
};
