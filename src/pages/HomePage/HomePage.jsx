// import { Container } from 'globalStyles/globalStyle';
import { Main, HomeTitle, HomeSection } from 'pages/HomePage/HomePage.styled';
import React, { Fragment } from 'react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

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
