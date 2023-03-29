import { createSlice } from '@reduxjs/toolkit';
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  getUserNotices,
  removeUserNotice,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log('action.payload', action.payload);
  state.isLoading = false;
  state.error = action.payload || true;
};

const initialState = {
  ownNotices: [],
  favoriteNotices: [],
  searchQuery: '',
  totalItems: null,
  isLoading: false,
  error: false,
  favoriteAction: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    search(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [getFavorites.fulfilled](state, action) {
      // if (
      //   !action.payload.results.some(item =>
      //     state.favoriteNotices.includes(item)
      //   )
      // ) {
      //   state.favoriteNotices.push(...action.payload.results);
      // }
      state.favoriteNotices = action.payload.results;
      state.totalItems = action.payload.totalItems;

      state.isLoading = false;
      state.error = false;
    },
    [addToFavorites.fulfilled](state, action) {
      // state.favoriteNotices = [action.payload, ...state.favoriteNotices];
      state.favoriteNotices.unshift(action.payload);

      state.favoriteAction = false;
      state.error = false;
    },
    [addToFavorites.rejected](state) {
      state.favoriteAction = false;
      state.error = true;
    },
    [addToFavorites.pending](state) {
      state.favoriteAction = true;
      state.error = false;
    },
    [removeFromFavorites.fulfilled](state, action) {
      const res = state.favoriteNotices.filter(
        item => action.payload.result !== item._id
      );
      state.favoriteNotices = res;

      state.favoriteAction = false;
      state.error = false;
    },
    [removeFromFavorites.rejected](state) {
      state.favoriteAction = false;
      state.error = true;
    },
    [removeFromFavorites.pending](state) {
      state.favoriteAction = true;
      state.error = false;
    },
    [getUserNotices.fulfilled](state, action) {
      // if (
      //   !action.payload.results.some(item => state.ownNotices.includes(item))
      // ) {
      //   state.ownNotices.push(...action.payload.results);
      // }
      state.ownNotices = action.payload.results;
      state.totalItems = action.payload.totalItems;

      state.isLoading = false;
      state.error = false;
    },
    [removeUserNotice.fulfilled](state, action) {
      const index = state.ownNotices.indexOf(action.payload.result);
      state.ownNotices.splice(index, 1);

      state.isLoading = false;
      state.error = false;
    },
    // [getByCategory.pending]: handlePending,
    [getFavorites.pending]: handlePending,
    // [addToFavorites.pending]: handlePending,
    // [removeFromFavorites.pending]: handlePending,
    [getUserNotices.pending]: handlePending,
    [removeUserNotice.pending]: handlePending,

    // [getByCategory.rejected]: handleRejected,
    [getFavorites.rejected]: handleRejected,
    // [addToFavorites.rejected]: handleRejected,
    // [removeFromFavorites.rejected]: handleRejected,
    [getUserNotices.rejected]: handleRejected,
    [removeUserNotice.rejected]: handleRejected,
  },
});

// export const { changeError } = authSlice.actions;
export const { search } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
