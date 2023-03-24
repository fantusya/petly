import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://uninterested-hose-newt.cyclic.app';
// axios.defaults.baseURL = 'http://localhost:3030';

const instance = axios.create({
  baseURL: 'https://uninterested-hose-newt.cyclic.app',
});
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    instance.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password, city, phone }
 */
export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/users/signup', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/users/login', credentials);
      // After successful login, add the token to the HTTP header
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('api/users/logout');
    // After a successful logout, remove the token from the HTTP header
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      // console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatar, thunkAPI) => {
    try {
      console.log('avatar', avatar);
      const { data } = await axios.put(`api/users/avatars`, avatar);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateInfo = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(`api/users/avatars`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// =========== PETS ===========

export const addPet = createAsyncThunk(
  'auth/addPet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`api/pets`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removePet = createAsyncThunk(
  'auth/removePet',
  async (petId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/pets/${petId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
