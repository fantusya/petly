import { useEffect, useState } from 'react';

import { instance } from 'api/baseSettings';
import { Status } from 'constants/status';

export const useFetchingData = url => {
  const [status, setStatus] = useState(Status.IDLE);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getFriends() {
      setStatus(Status.PENDING);

      try {
        const data = await instance(url);
        console.log(data.data);
        setResults(data.data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    getFriends();
  }, [url]);

  return { status, results };
};

// export const useFetchingData = (page, url) => {
//   const [status, setStatus] = useState(Status.IDLE);
//   const [results, setResults] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   useEffect(() => {
//     async function getFriends() {
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

//     getFriends();
//   }, [url, page]);

//   return { status, results, hasMore };
// };
