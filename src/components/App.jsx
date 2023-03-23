import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { logIn, refreshUser, addPet, removePet } from 'redux/auth/operations';
// import {
//   getByCategory,
//   getFavorites,
//   getOwnNotices,
//   removeFromFavorites,
//   addOwnNotice,
//   addToFavorites,
// } from 'redux/notices/operations';

import { ROUTES } from 'constants/routes';
import { useFetchingData } from 'hooks';
// import { RestrictedRoute, PrivateRoute } from './Routes/PrivateRoute';
import SharedLayout from 'components/SharedLayout';
import Example from './Example';
import NoticesCategoriesList from './NoticesCategoriesList';

import { GlobalStyle } from 'globalStyles/globalStyle';
import FontStyles from 'globalStyles/fontStyles';
import RegisterPage from 'pages/RegisterPage';

const HomePage = lazy(() => import('pages/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const NewsPage = lazy(() => import('pages/NewsPage'));
// const NoticesPage = lazy(() => import('pages/NoticesPage'));
// const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState({
    noticeDetails: false,
    addNoticeModal: false,
  });
  const stateHandler = value => {
    setIsModalOpen({ ...isModalOpen, [value]: !isModalOpen[value] });
  };

  // const { status, results } = useFetchingData('api/friends');
  // const { status, results } = useFetchingData('api/news');
  useFetchingData('api/friends');
  useFetchingData('api/news');

  // useFetchingData('api/friends');
  // useFetchingData('api/news');

  // const handleChange = e => {
  //   const chosenImg = e.target.files[0];

  //   if (!e.target.files.length || !chosenImg) {
  //     setSelectedFile(null);
  //     console.log('Choose an image to change your avatar!');
  //     return;
  //   }
  //   setSelectedFile(chosenImg);
  // };

  // const handleUpload = e => {
  //   e.preventDefault();

  //   // if (!selectedFile) {
  //   //   console.log('CHOOSE FILE PLS');
  //   //   return;
  //   // }
  //   // const data = new FormData();
  //   // data.append('name', 'Kovarny kotyara');
  //   // data.append('breed', 'schkodnyk');
  //   // data.append('comments', 'Миленький мальчик!');
  //   // data.append('date', new Date());
  //   // data.append('photoURL', selectedFile);

  //   // const data = new FormData();
  //   // data.append('name', 'kotofeychik');
  //   // data.append('sex', 'female');
  //   // data.append('title', 'Kupite pls');
  //   // data.append('category', 'sell');
  //   // data.append('breed', 'schkodnyk');
  //   // data.append('comments', 'Миленький мальчик!');
  //   // data.append('location', 'Brovary');
  //   // data.append('price', 1);
  //   // data.append('birthDate', new Date());
  //   // data.append('photoURL', selectedFile);
  //   // dispatch(addOwnNotice(data));
  //   // let id = '6418cb61dea99f728afd5b48';
  //   // dispatch(addToFavorites(id));
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function getLOGIN() {
  //     try {
  //       const data = await dispatch(
  //         logIn({
  //           email: 'guba.anastaysha@gmail.com',
  //           password: 'ann12345',
  //         })
  //       );

  //       if (data.type === 'auth/login/fulfilled') {
  //         const dataREf = await dispatch(refreshUser());
  //         // if (dataREf.type === 'auth/refresh/fulfilled') {
  //         //   dispatch(getFavorites());
  //         // }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getLOGIN();

  //   // if (data.type === 'auth/register/fulfilled') {
  //   //     await dispatch(
  //   //       login({ email: values.email, password: values.password })
  //   //     );
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={ROUTES.news} element={<NewsPage />} /> */}
          <Route
            path="notice"
            element={
              <NoticesCategoriesList
                stateHandler={stateHandler}
                isModalOpen={isModalOpen}
              />
            }
          />
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
          {/* <Route path={ROUTES.friends} element={<OurFriendsPage />} /> */}
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

      {/* <input
        type="file"
        name="photoURL"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.gif,.web"
      />
      <button onClick={handleUpload}>Submit</button> */}

      <Example />
      {/* // MUST BE DELETED LATER */}
      <RegisterPage />
      <FontStyles />

      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
