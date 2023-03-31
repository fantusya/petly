import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import LoadingWindow from './LoadingWindow';

import { ROUTES } from 'constants/routes';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout';
import NoticesCategoriesList from './NoticesCategoriesList';

import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <LoadingWindow />
  ) : (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path={ROUTES.news} element={<NewsPage />} />

          <Route path={ROUTES.friends} element={<OurFriendsPage />} />

          <Route path={ROUTES.notices} element={<NoticesPage />}>
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="favorite" element={<NoticesCategoriesList />} />
            <Route path="own" element={<NoticesCategoriesList />} />
          </Route>

          <Route
            path={ROUTES.register}
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path={ROUTES.login}
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path={ROUTES.user}
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />

          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Route>
      </Routes>

      <FontStyles />
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
