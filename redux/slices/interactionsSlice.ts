import {createAction, createSlice} from '@reduxjs/toolkit';

export type INTERACTIONSState = {
  isMakingUpVote: boolean;
  isMakingDownVote: boolean;
};

const initialState: INTERACTIONSState = {
  isMakingUpVote: false,
  isMakingDownVote: false,
};

export const changeIsMakingUpVote = createAction<{
  isMakingUpVote: boolean;
}>('changeIsMakingUpVote');

export const changeIsMakingDownVote = createAction<{
  isMakingDownVote: boolean;
}>('changeIsMakingDownVote');

const interactionsSlice = createSlice({
  name: 'interactionsReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeIsMakingUpVote, (state, _action) => {
        state.isMakingUpVote = !state.isMakingUpVote;
      })
      .addCase(changeIsMakingDownVote, (state, _action) => {
        state.isMakingDownVote = !state.isMakingDownVote;
      });
  },
});

export default interactionsSlice.reducer;
