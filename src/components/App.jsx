import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { useDispatch } from 'react-redux';

import { ROUTES } from 'constants/routes';
// import { useFetchingData } from 'hooks';
// import { RestrictedRoute, PrivateRoute } from './Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout';
import Example from './Example';
import NoticeCategoryItem from './NoticeCategoryItem';

import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';
// import RegisterPage from 'pages/RegisterPage';

const HomePage = lazy(() => import('pages/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
// const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  // const dispatch = useDispatch();

  // const { status, results } = useFetchingData('api/friends');
  // const { status, results } = useFetchingData('api/news');

  // useFetchingData('api/friends');
  // useFetchingData('api/news');

  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.news} element={<NewsPage />} />
          <Route path="notice" element={<NoticeCategoryItem />} />
          {/* <Route path={`${ROUTES.notices}`}>
            <Route
              index
              element={
                <Navigate replace to={`${ROUTES_CATEGORY_NAMES.sell}`} />
              }
            />
            <Route
              path={`:${ROUTES_PARAMS.categoryName}`}
              element={<NoticesPage />}
            />
          </Route> */}
          <Route path={ROUTES.friends} element={<OurFriendsPage />} />
          {/* <Route
            path={ROUTES.register}
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          /> */}
          {/* <Route
            path={ROUTES.login}
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          /> */}
          {/* <Route
            path={ROUTES.user}
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          /> */}

          {/* // MUST BE DELETED LATER */}
          <Route path="user" element={<UserPage />} />

          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Route>
      </Routes>

      <Example />
      {/* // MUST BE DELETED LATER */}
      {/* <RegisterPage /> */}
      <FontStyles />
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
