import React from 'react';
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
          Read More
        </NewsLink>
      </NewsDateLinkContainer>
    </NewsItemContainer>
  );
};

export default NewsItem;
