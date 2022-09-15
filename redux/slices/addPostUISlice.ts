import {createAction, createSlice} from '@reduxjs/toolkit';
import {IPostType} from '../../types/posts/postType';

export type UIState = {
  uploadPostProgress?: number;
  isUploadingPost?: boolean;
  previewUploadUri?: string | undefined;
  newPostAdded?: boolean;
  newPost: IPostType | null;
};

const initialState: UIState = {
  uploadPostProgress: 0,
  isUploadingPost: false,
  previewUploadUri: undefined,
  newPostAdded: false,
  newPost: null,
};

export const setNewPost = createAction<{newPost: IPostType | null}>(
  'setNewPost',
);

export const setNewPostAdded = createAction<{newPostAdded: boolean}>(
  'setNewPostAdded',
);

export const changeIsUploadingPost = createAction<{isUploadingPost: boolean}>(
  'changeIsUploadingPost',
);

export const setUploadPostProgress = createAction<{
  uploadPostProgress: number;
}>('setUploadPostProgress');

export const changeUploadPreview = createAction<{previewUploadUri: string}>(
  'changeUploadPreview',
);

const addPostUISlice = createSlice({
  name: 'addPostUISlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(changeIsUploadingPost, (state, action) => {
        state.isUploadingPost = action.payload.isUploadingPost;
        if (action.payload.isUploadingPost === false) {
          state.uploadPostProgress = 0;
          state.previewUploadUri = undefined;
        }
      })
      .addCase(setUploadPostProgress, (state, action) => {
        state.uploadPostProgress = action.payload.uploadPostProgress;
      })
      .addCase(changeUploadPreview, (state, action) => {
        state.previewUploadUri = action.payload.previewUploadUri;
      })
      .addCase(setNewPostAdded, (state, action) => {
        state.newPostAdded = action.payload.newPostAdded;
      })
      .addCase(setNewPost, (state, action) => {
        state.newPost = action.payload.newPost;
      });
  },
});

export default addPostUISlice.reducer;
