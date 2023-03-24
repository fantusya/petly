import axios from 'axios';

import { instance } from './baseSettings';

export const getNoticeByCategory = async ({
  categoryName,
  search,
  page = 1,
}) => {
  const url = search
    ? `api/notices/category/${categoryName}?page=${page}&search=${search}`
    : `api/notices/category/${categoryName}?page=${page}`;

  const { data } = await axios.get(url);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await axios.get(`api/notices/id/${id}`);
  console.log('getNoticeById', data);
  return data;
};

export const addUserNotice = async credentials => {
  const { data } = await instance.post(`api/notices`, credentials);
  console.log('addUserNotice', data);
  return data;
};
