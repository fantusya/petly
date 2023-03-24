import { Box } from 'components/Box/Box';
import React, { useState, useEffect } from 'react';
import { useFetchingData } from 'hooks/useFetchingData';
import NewsItem from 'components/NewsPage/NewsItem/NewsItem';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { NewsList } from './NewsPage.styled';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  const { status, results } = useFetchingData('api/news');

  useEffect(() => {
    if (status === 'RESOLVED') {
      setNews(results.slice(0, 6));
    }
  }, [status, results]);

  return (
    <Box as="section" pt={['42px', '58px', '88px']}>
      <PageTitle>News</PageTitle>

      <SearchBar setNews={setNews} />
      <NewsList>
        {news.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            date={article.publishedAt}
            url={article.url}
          />
        ))}
      </NewsList>
    </Box>
  );
};

export default NewsPage;
