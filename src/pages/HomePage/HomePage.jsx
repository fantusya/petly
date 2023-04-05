// import { Container } from 'globalStyles/globalStyle';
import { Main, HomeTitle, HomeSection } from 'pages/HomePage/HomePage.styled';
import React, { Fragment, useEffect } from 'react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useLocation } from 'react-router-dom';
import { token } from 'api/baseSettings';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/slice';

export const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Home`;

    if (accessToken && refreshToken) {
      token.set(accessToken);
      dispatch(setToken(accessToken));
      localStorage.setItem('refreshToken', refreshToken);
    }
  }, [accessToken, dispatch, refreshToken, location]);

  return (
    <>
      <Main>
        <Media
          queries={{
            small: '(max-width: 767.9px)',
            medium: '(min-width: 768px) and (max-width: 1279.9px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <HomeSection>
                  {/* <Container> */}
                  <HomeTitle>{t('Title')}</HomeTitle>
                  {/* </Container> */}
                </HomeSection>
              )}

              {matches.medium && (
                <HomeSection>
                  {/* <Container> */}
                  <HomeTitle>{t('Title')}</HomeTitle>
                  {/* </Container> */}
                </HomeSection>
              )}

              {matches.large && (
                <HomeSection>
                  <HomeTitle>{t('Title')}</HomeTitle>
                </HomeSection>
              )}
            </Fragment>
          )}
        </Media>
      </Main>
    </>
  );
};

export default HomePage;
