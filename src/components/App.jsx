// import { Route, Routes, Navigate } from 'react-router-dom';
// import { RestrictedRoute, PrivateRoute } from './Routes/PrivateRoute';

import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';

import Example from './Example';

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
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes> */}
      <Example />
      <FontStyles />
      <GlobalStyle />
    </>
  );
};
