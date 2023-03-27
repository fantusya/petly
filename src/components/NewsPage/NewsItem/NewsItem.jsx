import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  NewsItemContainer,
  Border,
  NewsTitle,
  NewsDescription,
  NewsDateLinkContainer,
  NewsDate,
  NewsLink,
  ContainerNews,
} from './NewsItem.styled';

const NewsItem = ({ title, description, date, url }) => {
  const { t } = useTranslation();

  return (
    <NewsItemContainer>
      <ContainerNews>
        <Border />
        <NewsTitle>{title}</NewsTitle>
        <NewsDescription>{description}</NewsDescription>
      </ContainerNews>

      <NewsDateLinkContainer>
        <NewsDate>{date}</NewsDate>
        <NewsLink href={url} target="_blank" rel="noopener noreferrer">
          {t('Read_more')}
        </NewsLink>
      </NewsDateLinkContainer>
    </NewsItemContainer>
  );
};

export default NewsItem;
