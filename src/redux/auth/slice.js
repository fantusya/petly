import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateInfo,
} from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  //   console.log('action.payload', action.payload);
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const initialState = {
  user: {
    token: null,
    name: null,
    email: null,
    phone: null,
    birthDate: null,
    city: null,
    avatarURL: null,
  },
  token: null,

  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   reducers: {
  //     changeError(state, action) {
  //       state.error = false;
  //     },
  //   },
  extraReducers: {
    [signup.fulfilled](state, action) {
      state.user = action.payload;

      state.isRefreshing = false;
      state.error = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = false;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
        phone: null,
        birthDate: null,
        city: null,
        avatarURL: null,
      };
      state.token = null;

      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = false;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;

      state.isRefreshing = false;
      state.error = false;
    },
    [updateInfo.fulfilled](state, action) {
      state.user = action.payload;

      state.isRefreshing = false;
      state.error = false;
    },
    [signup.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,
    [refreshUser.pending]: handlePending,
    [updateAvatar.pending]: handlePending,
    [updateInfo.pending]: handlePending,
    [signup.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [refreshUser.rejected]: handleRejected,
    [updateAvatar.rejected]: handleRejected,
    [updateInfo.rejected]: handleRejected,
  },
});

// export const { changeError } = authSlice.actions;
export const authReducer = authSlice.reducer;
