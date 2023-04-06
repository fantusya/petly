import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import { Box } from 'components/Box/Box';
import { Container } from 'globalStyles/globalStyle';

import { useFetchingData } from 'hooks/useFetchingData';
import { toISODate } from 'helpers/newsHelpers/dateConverting';
import { stringMax } from 'helpers/newsHelpers/stringConverting';

import NewsItem from 'components/NewsPage/NewsItem/NewsItem';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { NewsList } from './NewsPage.styled';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';

const NewsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [news, setNews] = useState([]);
  const [publicNews, setPublicNews] = useState([]);
  const [request, setRequest] = useState('');

  const { status, results } = useFetchingData('api/news');

  useEffect(() => {
    document.title = `News`;

    if (status === 'resolved') {
      const NewNews = results.map(news => ({
        ...news,
        title: stringMax(news.title, 50) + '...',
        date: Date.parse(news.date),
        description: stringMax(news.description, 250) + '...',
      }));

      const SortNews = NewNews.sort(
        (a, b) => b.date - a.date || isNaN(b.date) - isNaN(a.date)
      );

      const NewDateNews = SortNews.map(news => ({
        ...news,
        date:
          toISODate(news.date) !== 'NaN/NaN/NaN'
            ? toISODate(news.date)
            : i18n.t('Two_or_three_weeks_ago'),
      }));
      setNews(NewDateNews);
      setPublicNews(NewDateNews);
    }
  }, [status, results, location]);

  useEffect(() => {
    async function filterArray() {
      const normalisedFilter = request.toLowerCase();

      const filterNews = news.filter(item => {
        return item.title.toLowerCase().includes(normalisedFilter);
      });

      if (filterNews.length === 0) {
        setPublicNews(news);
        if (request !== '') {
          toast.error(i18n.t('No_news'));
        }
        return;
      }

      setPublicNews(filterNews);
    }

    filterArray();
  }, [request, news]);

  const handleFormSubmit = value => {
    if (request !== value) {
      setRequest(value);
    } else if (value.trim() !== '') {
      toast(i18n.t('Current_news'), { icon: '⚠️' });
      return;
    }
  };

  return (
    <Box
      as="section"
      pt={['100px', '100px', '160px', '126px']}
      pb={['100px', '100px', '100px', '200px']}
    >
      <Container>
        <PageTitle>{t('News')}</PageTitle>

        <SearchBar onSubmit={handleFormSubmit} />
        <NewsList>
          {publicNews.map(article => (
            <NewsItem
              key={article._id}
              title={article.title}
              description={article.description}
              date={article.date}
              url={article.url}
            />
          ))}
        </NewsList>
      </Container>
    </Box>
  );
};

export default NewsPage;
