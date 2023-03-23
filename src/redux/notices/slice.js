import { createSlice } from '@reduxjs/toolkit';
import {
  getByCategory,
  // getById,
  getFavorites,
  // addToFavorites,
  // removeFromFavorites,
  getOwnNotices,
  addOwnNotice,
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
  noticesItems: [],
  isLoading: false,
  error: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  //   reducers: {
  //     changeError(state, action) {
  //       state.error = false;
  //     },
  //   },
  extraReducers: {
    [getByCategory.fulfilled](state, action) {
      state.noticesItems = action.payload;

      state.isRefreshing = false;
      state.error = false;
    },
    [getFavorites.fulfilled](state, action) {
      state.noticesItems = action.payload;

      state.isRefreshing = false;
      state.error = false;
    },
    // [addToFavorites.fulfilled](state, action) {
    //   state.noticesItems = action.payload.favoriteNotices;

    //   state.isRefreshing = false;
    //   state.error = false;
    // },
    [getOwnNotices.fulfilled](state, action) {
      state.noticesItems = action.payload;

      state.isRefreshing = false;
      state.error = false;
    },
    [addOwnNotice.fulfilled](state, action) {
      state.noticesItems.unshift(action.payload);

      state.isRefreshing = false;
      state.error = false;
    },
    // [getById.fulfilled](state, action) {
    //   state.isRefreshing = false;
    //   state.error = false;
    // },
    [getByCategory.pending]: handlePending,
    [getFavorites.pending]: handlePending,
    // [addToFavorites.pending]: handlePending,
    [getOwnNotices.pending]: handlePending,
    [addOwnNotice.pending]: handlePending,
    // [getById.pending]: handlePending,
    [getByCategory.rejected]: handleRejected,
    [getFavorites.rejected]: handleRejected,
    // [addToFavorites.rejected]: handleRejected,
    [getOwnNotices.rejected]: handleRejected,
    [addOwnNotice.rejected]: handleRejected,
    // [getById.rejected]: handleRejected,
  },
});

// export const { changeError } = authSlice.actions;
export const noticesReducer = noticesSlice.reducer;
