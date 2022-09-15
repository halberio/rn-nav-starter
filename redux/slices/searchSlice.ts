import {createAction, createSlice} from '@reduxjs/toolkit';

export type UIState = {
  query: string;
  recentSearchQuery: string;
  shouldUpdateQuery: boolean;
  isSearchInputEmpty: boolean;
};

const initialState: UIState = {
  query: '',
  recentSearchQuery: '',
  shouldUpdateQuery: false,
  isSearchInputEmpty: true,
};

export const setRecentSearchQuery = createAction<{recentSearchQuery: string}>(
  'setRecentSearchQuery',
);

export const setSearchInputEmpty = createAction<{isSearchInputEmpty: boolean}>(
  'setSearchInputEmpty',
);

export const setSearchQuery = createAction<{query: string}>('setSearchQuery');

export const setSearchShouldUpdateQuery = createAction<{
  shouldUpdateQuery: boolean;
}>('setSearchShouldUpdateQuery');

const searchSlice = createSlice({
  name: 'searchReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setSearchInputEmpty, (state, action) => {
        state.isSearchInputEmpty = action.payload.isSearchInputEmpty;
      })
      .addCase(setSearchQuery, (state, action) => {
        state.query = action.payload.query;
      })
      .addCase(setRecentSearchQuery, (state, action) => {
        state.recentSearchQuery = action.payload.recentSearchQuery;
      })
      .addCase(setSearchShouldUpdateQuery, (state, action) => {
        state.shouldUpdateQuery = action.payload.shouldUpdateQuery;
      });
  },
});

export default searchSlice.reducer;
