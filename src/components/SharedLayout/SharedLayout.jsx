import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <>
      {/* <AppBar /> */}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
