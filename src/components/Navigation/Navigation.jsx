import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { MainNav } from './Navigation.styled';
import { useState } from 'react';
import { BurgerZone } from 'components/BurgerMenu/BurgerMenu';
import React, { Fragment } from 'react';
import Media from 'react-media';
import { useAuth } from 'hooks';
import { LangSwitcher } from '../../components/LangSwitcher';

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useAuth();

  return (
    <MainNav>
      <Media
        queries={{
          small: '(max-width: 767.98px)',
          medium: '(min-width: 768px) and (max-width: 1279.98px)',
          // small: '(max-width: 767px)',
          // medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                <LangSwitcher />
                <BurgerZone setOpen={setOpen} open={open}>
                  {!isLoggedIn ? (
                    <AuthNav setOpen={setOpen} />
                  ) : (
                    <UserNav setOpen={setOpen} />
                  )}
                  <Nav setOpen={setOpen} />
                </BurgerZone>
              </>
            )}

            {matches.medium && (
              <>
                <LangSwitcher />
                <BurgerZone setOpen={setOpen} open={open}>
                  <Nav setOpen={setOpen} />
                </BurgerZone>
                {!isLoggedIn ? <AuthNav /> : <UserNav />}
              </>
            )}

            {matches.large && (
              <>
                <Nav />
                <LangSwitcher />
                {!isLoggedIn ? <AuthNav /> : <UserNav />}
              </>
            )}
          </Fragment>
        )}
      </Media>

      {/* {isMobileScreen ? (
        <BurgerZone setOpen={setOpen} open={open}>
          {!isLoggedIn ? (
            <AuthNav setOpen={setOpen} />
          ) : (
            <UserNav setOpen={setOpen} />
          )}
          <Nav open={open} setOpen={setOpen} />
        </BurgerZone>
      ) : (
        <>
          {isTabletScreen ? (
            <>
              <BurgerZone setOpen={setOpen} open={open}>
                <Nav setOpen={setOpen} />
              </BurgerZone>
              {!isLoggedIn ? <AuthNav /> : <UserNav />}
            </>
          ) : (
            <>
              <Nav />
              {!isLoggedIn ? <AuthNav /> : <UserNav />}
            </>
          )}
        </>
      )} */}
    </MainNav>
  );
};
