import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getByCategory = createAsyncThunk(
//   'notices/getByCategory',
//   async ({ categoryName, search, page = 1 }, thunkAPI) => {
//     try {
//       const url = search
//         ? `api/notices/category/${categoryName}?page=${page}&search=${search}`
//         : `api/notices/category/${categoryName}?page=${page}`;

//       const { data } = await axios.get(url);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const getFavorites = createAsyncThunk(
  'notices/getFavorites',
  async ({ search, page = 1 }, thunkAPI) => {
    try {
      const url = search
        ? `api/notices/favorite?page=${page}&search=${search}`
        : `api/notices/favorite?page=${page}`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.post(`api/notices/favorite/${noticeId}`);
      console.log('ADD TO FAVORITE', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'notices/removeFromFavorites',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/favorite/${noticeId}`);
      console.log('REMOVE FROM FAVORITE', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async ({ search, page = 1 }, thunkAPI) => {
    try {
      const url = search
        ? `api/notices?page=${page}&search=${search}`
        : `api/notices?page=${page}`;

      const { data } = await axios.get(url);
      console.log('dataaaa', data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeUserNotice = createAsyncThunk(
  'notices/removeUserNotice',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/id/${noticeId}`);
      console.log('removeUserNotice', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const addUserNotice = createAsyncThunk(
//   'notices/addUserNotice',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await instance.post(`api/notices`, credentials);
//       console.log('addUserNotice', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
