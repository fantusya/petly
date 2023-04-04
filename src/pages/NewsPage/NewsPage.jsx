import { Box } from 'components/Box/Box';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchingData } from 'hooks/useFetchingData';
import NewsItem from 'components/NewsPage/NewsItem/NewsItem';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { NewsList } from './NewsPage.styled';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';
import { toISODate } from 'helpers/newsHelpers/dateConverting';
import { stringMax } from 'helpers/newsHelpers/stringConverting';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

// -------------------------------------------------
import { toast } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'globalStyles/globalStyle';

const NewsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [news, setNews] = useState([]);
  const [publicNews, setPublicNews] = useState([]);
  const [request, setRequest] = useState('');

  const { status, results } = useFetchingData('api/news');

  /*сортування новин */

  useEffect(() => {
    document.title = `News`;

    if (status === 'resolved') {
      const NewNews = results.map(news => ({
        ...news,
        title: stringMax(news.title, 50) + '...',
        date: Date.parse(news.date),
        description: stringMax(news.description, 250) + '...',
      }));
      //   console.log('NewNews', NewNews);
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

  /*фільтр новин*/

  useEffect(() => {
    async function filterArray() {
      const normalisedFilter = request.toLowerCase();

      /*фільтр відсортованого масиву */
      const filterNews = news.filter(item => {
        return item.title.toLowerCase().includes(normalisedFilter);
      });

      /*якщо нічого не знайдено,- рендер всього списку */
      if (filterNews.length === 0) {
        // console.log('нічого не знайдено');
        setPublicNews(news);
        // -додано повідомлення про невдалий пошук
        if (request !== '') {
          toast.error(
            `Новин за запитом "${request}" не знайдено. Спробуйте інший запит!`
          );
          // alert(
          //   'Новини за вказаним запитом не знайдено. Спробуйте інший запит.'
          // );
        }

        return;
      }

      setPublicNews(filterNews);
    }

    filterArray();
  }, [request, news]);

  /*перевірка чи запит інший */
  const handleFormSubmit = value => {
    if (request !== value) {
      setRequest(value);
    } else if (value.trim() !== '') {
      toast.error(`Ви переглядаєте "${value}". Спробуйте інший запит!`);
      return;
    }
  };

  /* -------------------------------------------------------------------------------------- */

  return (
    <Box
      as="section"
      pt={['100px', '100px', '160px', '126px']}
      // pl={['20px', '20px', '32px', '16px']}
      // pr={['20px', '20px', '32px', '16px']}
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
        <ToastContainer />
      </Container>
    </Box>
  );
};

export default NewsPage;
