import { useEffect, useState } from 'react';

import { commonRoutes } from 'api/baseSettings';
import { Status } from 'constants/status';

export const useFetchingData = (url, query = '') => {
  const [status, setStatus] = useState(Status.IDLE);
  const [results, setResults] = useState([]);

  const newUrl = query ? `${url}?query=${query}` : url;

  useEffect(() => {
    async function getInfo() {
      setStatus(Status.PENDING);

      try {
        const { data } = await commonRoutes.get(newUrl);
        setResults(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }

    getInfo();
  }, [url, query, newUrl]);

  return { status, results };
};

// FOR PAGINATION

// export const useFetchingData = (page, url) => {
//   const [status, setStatus] = useState(Status.IDLE);
//   const [results, setResults] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   useEffect(() => {
//     async function getInfo() {
//       setStatus(Status.PENDING);

//       try {
//         const { results, current_total, total } = await fetchData(page, url);
//         setResults(prevState => [...prevState, ...results]);
//         setHasMore(results.length > 0 && current_total < total);

//         console.log('hook results', results);
//         console.log('total', total);
//         console.log('current_total', current_total);

//         setStatus(Status.RESOLVED);
//       } catch (error) {
//         setStatus(Status.REJECTED);
//         console.log(error);
//       }
//     }

//     getInfo();
//   }, [url, page]);

//   return { status, results, hasMore };
// };
