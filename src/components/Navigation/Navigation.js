import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { MainNav } from './Navigation.styled';
import { MyReponsiveComponent } from 'hooks/MyReponsiveComponent';
import { useState } from 'react';
import { BurgerZone } from 'components/BurgerMenu/BurgerMenu';
import React from 'react';

const token = true;
export const Navigation = () => {
  const { isMobileScreen, isTabletScreen } = MyReponsiveComponent();

  const [open, setOpen] = useState(false);

  return (
    <MainNav>
      {isMobileScreen ? (
        <BurgerZone setOpen={setOpen} open={open}>
          {!token ? (
            <AuthNav setOpen={setOpen} />
          ) : (
            <UserNav setOpen={setOpen} />
          )}
          <Nav setOpen={setOpen} />
        </BurgerZone>
      ) : (
        <>
          {isTabletScreen ? (
            <>
              <BurgerZone setOpen={setOpen} open={open}>
                <Nav setOpen={setOpen} />
              </BurgerZone>
              {!token ? <AuthNav /> : <UserNav />}
            </>
          ) : (
            <>
              <Nav />
              {!token ? <AuthNav /> : <UserNav />}
            </>
          )}
        </>
      )}
    </MainNav>
  );
};
