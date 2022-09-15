import {createAction, createSlice} from '@reduxjs/toolkit';

export type LocationsState = {
  locationsSuggestions: string[];
};

const initialState: LocationsState = {
  locationsSuggestions: ['Tunisia'],
};

export const setLocationSuggestionList = createAction<{
  locationsSuggestions: string[];
}>('setSuggestionList');

export const deleteLocationSuggestionFromList = createAction<{
  index: number;
}>('deleteLocationSuggestionFromList');

const locationsSlice = createSlice({
  name: 'locationsReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setLocationSuggestionList, (state, action) => {
        state.locationsSuggestions = action.payload.locationsSuggestions;
      })
      .addCase(deleteLocationSuggestionFromList, (state, action) => {
        state.locationsSuggestions = state.locationsSuggestions.filter(
          (_, index) => index !== action.payload.index,
        );
      });
  },
});

export default locationsSlice.reducer;
