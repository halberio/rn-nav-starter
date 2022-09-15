import {createAction, createSlice} from '@reduxjs/toolkit';

export type UIState = {
  editorMuted: boolean;
};

const initialState: UIState = {
  editorMuted: false,
};

export const changeEditorIsMuted = createAction('changeEditorIsMuted');

export const setEditorIsMuted = createAction<{editorMuted: boolean}>(
  'setEditorIsMuted',
);

const editorVideoSlice = createSlice({
  name: 'editorVideoReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeEditorIsMuted, (state, _action) => {
        state.editorMuted = !state.editorMuted;
      })
      .addCase(setEditorIsMuted, (state, _action) => {
        state.editorMuted = _action.payload.editorMuted;
      });
  },
});

export default editorVideoSlice.reducer;
