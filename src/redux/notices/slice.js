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
      state.favoriteNotices = action.payload.results;
      state.totalItems = action.payload.totalItems;

      state.isLoading = false;
      state.error = false;
    },
    [addToFavorites.fulfilled](state, action) {
      // state.favoriteNotices.unshift(action.payload);
      state.favoriteNotices = [action.payload, ...state.favoriteNotices];

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
      state.ownNotices = action.payload.results;
      state.totalItems = action.payload.totalItems;

      state.isLoading = false;
      state.error = false;
    },
    [removeUserNotice.fulfilled](state, action) {
      const res = state.ownNotices.filter(
        item => action.payload.result !== item._id
      );
      state.ownNotices = res;
      state.isLoading = false;
      state.error = false;
    },
    [getFavorites.pending]: handlePending,
    [getUserNotices.pending]: handlePending,
    [removeUserNotice.pending]: handlePending,
    [getFavorites.rejected]: handleRejected,
    [getUserNotices.rejected]: handleRejected,
    [removeUserNotice.rejected]: handleRejected,
  },
});

// export const { changeError } = authSlice.actions;
export const { search } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
