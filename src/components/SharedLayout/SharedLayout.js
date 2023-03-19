import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
