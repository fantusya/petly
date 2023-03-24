import axios from 'axios';

export const fetchData = async url => {
  const { data } = await axios.get(url);

  return data;
};

// export const fetchData = async (page, url) => {
//   const {
//     data: { results, current_total, total },
//   } = await axios.get(url, { params: { page } });

//   console.log('results', results);
//   //   console.log('total', total);

//   return { results, current_total, total };
// };
