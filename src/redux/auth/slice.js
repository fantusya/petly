import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateInfo,
  addPet,
  removePet,
} from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  //   console.log('action.payload', action.payload);
  state.isRefreshing = false;
  // state.error = action.payload.message || false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    birthDate: null,
    city: null,
    avatarURL: null,
    myPets: [],
  },
  accessToken: null,
  refreshToken: null,

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
      // state.user = action.payload;
      state.isRefreshing = false;
      state.error = false;
    },
    [logIn.fulfilled](state, action) {
      // state.user = action.payload.user;
      console.log('action.payload', action.payload);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

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
      state.accessToken = null;
      state.refreshToken = null;

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
    [addPet.fulfilled](state, action) {
      state.user.myPets.push(action.payload);

      state.isRefreshing = false;
      state.error = false;
    },
    [removePet.fulfilled](state, action) {
      const index = state.user.myPets.findIndex(
        pet => pet._id === action.payload._id
      );
      state.user.myPets.splice(index, 1);

      state.isRefreshing = false;
      state.error = false;
    },
    [signup.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,
    [refreshUser.pending]: handlePending,
    [updateAvatar.pending]: handlePending,
    [updateInfo.pending]: handlePending,
    [addPet.pending]: handlePending,
    [removePet.pending]: handlePending,
    [signup.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [refreshUser.rejected]: handleRejected,
    [updateAvatar.rejected]: handleRejected,
    [updateInfo.rejected]: handleRejected,
    [addPet.rejected]: handleRejected,
    [removePet.rejected]: handleRejected,
  },
});

// export const { changeError } = authSlice.actions;
export const authReducer = authSlice.reducer;
