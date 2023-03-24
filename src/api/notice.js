import { commonRoutes, privateRoutes } from './baseSettings';

export const getNoticeByCategory = async ({
  categoryName,
  search,
  page = 1,
}) => {
  const url = search
    ? `api/notices/category/${categoryName}?page=${page}&search=${search}`
    : `api/notices/category/${categoryName}?page=${page}`;

  const { data } = await commonRoutes.get(url);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await commonRoutes.get(`api/notices/id/${id}`);
  console.log('getNoticeById', data);
  return data;
};

export const addUserNotice = async credentials => {
  const { data } = await privateRoutes.post(`api/notices`, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('addUserNotice', data);
  return data;
};
