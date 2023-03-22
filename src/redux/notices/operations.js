import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://uninterested-hose-newt.cyclic.app';
axios.defaults.baseURL = 'http://localhost:3030';

const instance = axios.create({
  baseURL: 'http://localhost:3030',
});
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

export const getByCategory = createAsyncThunk(
  'notices/getByCategory',
  async (category, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/notices/category/${category}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const getById = createAsyncThunk(
//   'notices/getById',
//   async (noticeId, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`api/notices/id/${noticeId}`);
//       console.log('data', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const getFavorites = createAsyncThunk(
  'notices/getFavorites',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/notices/favorite`);
      console.log('FAVORITES', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const addToFavorites = createAsyncThunk(
//   'notices/addToFavorites',
//   async (noticeId, thunkAPI) => {
//     try {
//       const { data } = await axios.post(`api/notices/favorite/${noticeId}`);
//       console.log('ADD TO FAVORITE', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const removeFromFavorites = createAsyncThunk(
//   'notices/removeFromFavorites',
//   async (noticeId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`api/notices/favorite/${noticeId}`);
//       console.log('REMOVE', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const getOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/notices`);
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addOwnNotice = createAsyncThunk(
  'notices/addOwnNotice',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`api/notices`, credentials);
      console.log('addOwnNotice', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const removeOwnNotice = createAsyncThunk(
//   'notices/addOwnNotice',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post(`api/notices`, credentials);
//       console.log('addOwnNotice', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
