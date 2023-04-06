import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRoutes } from 'api/baseSettings';

export const getFavorites = createAsyncThunk(
  'notices/getFavorites',
  async ({ search, page = 1 }, thunkAPI) => {
    try {
      const url = search
        ? `api/notices/favorite?page=${page}&search=${search}`
        : `api/notices/favorite?page=${page}`;

      const { data } = await privateRoutes.get(url);
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
      const { data } = await privateRoutes.post(
        `api/notices/favorite/${noticeId}`
      );
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
      const { data } = await privateRoutes.delete(
        `api/notices/favorite/${noticeId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async ({ search = '', page = 1 }, thunkAPI) => {
    try {
      const url = search
        ? `api/notices?page=${page}&search=${search}`
        : `api/notices?page=${page}`;

      const { data } = await privateRoutes.get(url);
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
      const { data } = await privateRoutes.delete(`api/notices/id/${noticeId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
