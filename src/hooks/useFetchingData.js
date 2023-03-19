import { useEffect, useState } from 'react';

import { fetchData } from 'api';
import { Status } from 'constants/status';

export default function useFetchingData(url) {
  const [status, setStatus] = useState(Status.IDLE);
  const [results, setResults] = useState([]);
  //   const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function getFriends() {
      setStatus(Status.PENDING);

      try {
        const { results, total } = await fetchData(url);
        setResults(prevState => [...prevState, ...results]);

        console.log('hook results', results);
        console.log('total', total);

        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    getFriends();
  }, [url]);

  return { status, results };
}
