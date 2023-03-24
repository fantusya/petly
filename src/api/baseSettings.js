import axios from 'axios';
import { LOCALHOST_URL } from 'constants/urls';
// import { HOST_URL, LOCALHOST_URL } from 'constants/urls';

axios.defaults.baseURL = LOCALHOST_URL;

export const instance = axios.create({
  baseURL: LOCALHOST_URL,
});

// axios.defaults.baseURL = HOST_URL;
// const instance = axios.create({
//   baseURL: HOST_URL,
// });
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    instance.defaults.headers.common.Authorization = '';
  },
};
