import { commonRoutes } from './baseSettings';

export const fetchData = async url => {
  const { data } = await commonRoutes.get(url);

  return data;
};

// export const fetchData = async (page, url) => {
//   const {
//     data: { results, current_total, total },
//   } = await commonRoutes.get(url, { params: { page } });

//   console.log('results', results);
//   //   console.log('total', total);

//   return { results, current_total, total };
// };
