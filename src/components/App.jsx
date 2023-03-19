import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import useFetchingData from 'hooks/useFetchingData';

// import { RestrictedRoute, PrivateRoute } from './Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout';

import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';

import Example from './Example';

// const HomePage = lazy(() => import('pages/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const NewsPage = lazy(() => import('pages/NewsPage'));
// const NoticesPage = lazy(() => import('pages/NoticesPage'));
// const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  // const { status, results } = useFetchingData('api/friends');
  // const { status, results } = useFetchingData('api/news');
  useFetchingData(1, 'api/friends');
  // useFetchingData('api/news');

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/:categoryName" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <PrivateRoute redirectTo="/login" component={<UserPage />} /> */}

          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
      <Example />
      <FontStyles />
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
