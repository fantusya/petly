import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRoutes, token } from 'api/baseSettings';

/*
 * POST @ /users/signup
 * body: { name, email, password, city, phone }
 */
export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await privateRoutes.post(
        'api/users/signup',
        credentials
      );
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
      const { data } = await privateRoutes.post('api/users/login', credentials);
      // After successful login, add the token to the HTTP header
      // console.log('data.refreshToken', data.refreshToken);
      // console.log('data.accessToken', data.accessToken);

      token.set(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
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
    await privateRoutes.get('api/users/logout');
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
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const { data } = await privateRoutes.get('api/users/current');
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
      const { data } = await privateRoutes.put(`api/users/avatars`, avatar, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      const { data } = await privateRoutes.patch(`api/users/edit`, credentials);
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
      const { data } = await privateRoutes.post(`api/pets`, credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      const { data } = await privateRoutes.delete(`api/pets/${petId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
