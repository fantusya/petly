import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';
// axios.defaults.baseURL = 'https://uninterested-hose-newt.cyclic.app';

export const fetchData = async url => {
  const {
    data: { results, total },
  } = await axios.get(url);
  //   console.log('results', results);
  //   console.log('total', total);

  return { results, total };
};
