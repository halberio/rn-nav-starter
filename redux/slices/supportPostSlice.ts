import {createAction, createSlice} from '@reduxjs/toolkit';
import {IPostType} from '../../types/posts/postType';

export type SupportState = {
  activePost: IPostType | null;
};

const initialState: SupportState = {
  activePost: null,
};

export const setActiveSupportPost = createAction<SupportState>(
  'setActiveSupportPost',
);

const supportPostSlice = createSlice({
  name: 'supportPostReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setActiveSupportPost, (state, action) => {
      state.activePost = action.payload.activePost;
    });
  },
});

export default supportPostSlice.reducer;
