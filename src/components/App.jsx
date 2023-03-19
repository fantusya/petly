import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { RestrictedRoute, PrivateRoute } from './Routes/PrivateRoute';

import { GlobalStyle } from 'globalStyles/globalStyle';

import { ROUTES, ROUTES_CATEGORY_NAMES, ROUTES_PARAMS } from 'constants/routes';

import FontStyles from 'globalStyles/fontStyles';

import Example from './Example';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
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
          <PrivateRoute redirectTo="/login" component={<UserPage />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes> */}

      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path={ROUTES.news} element={<NewsPage />} />

          <Route path={`${ROUTES.notices}`}>
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
          </Route>

          <Route path={ROUTES.friends} element={<OurFriendsPage />} />

          <Route
            path={ROUTES.register}
            element={
              //<RestrictedRoute>
              <RegisterPage />
              //</RestrictedRoute>
            }
          />

          <Route
            path={ROUTES.login}
            element={
              // <RestrictedRoute>
              <LoginPage />
              // </RestrictedRoute>
            }
          />

          <Route
            path={ROUTES.user}
            element={
              //<PrivateRoute>
              <UserPage />
              // </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.home} />} />
      </Routes>
      <Example />
      <FontStyles />
      <GlobalStyle />
    </>
  );
};
