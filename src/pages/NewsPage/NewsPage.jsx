import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../../components/NewsItem/NewsItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Title, NewsPageWrapper, NewsList } from './News.styled';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  // Як приклад для наглядності,  отримання новин із сайту newsapi.org
  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: '83133a4f0221416bbbf3ca7f6aacf757',
        },
      })
      .then(response => setNews(response.data.articles.slice(0, 6)))
      .catch(error => console.log(error));
  }, []);

  return (
    <NewsPageWrapper>
      <Title>News</Title>
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
    </NewsPageWrapper>
  );
};

export default NewsPage;
