import {createAction, createSlice} from '@reduxjs/toolkit';

export type UIState = {
  isMuted: boolean;
  isPaused: boolean;
  editorMuted: boolean;
  shouldPlay: boolean;
  darkMode: boolean;
  colorMode: 'light' | 'dark' | 'auto';
};

const initialState: UIState = {
  isMuted: false,
  isPaused: false,
  editorMuted: false,
  shouldPlay: false,
  darkMode: false,
  colorMode: 'auto',
};

export const changeEditorIsMuted = createAction('changeEditorIsMuted');
export const changeIsMuted = createAction('changeIsMuted');
export const changeIsPaused = createAction('changeIsPaused');
export const setShouldPlay = createAction<{shouldPlay: boolean}>(
  'setShouldPlay',
);

export const setColorMode = createAction<{
  colorMode: 'light' | 'dark' | 'auto';
}>('setColorMode');

export const changeIsDarkMode = createAction('changeIsDarkMode');
const userInterfaceSlice = createSlice({
  name: 'userInterfaceReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeIsMuted, (state, _action) => {
        state.isMuted = !state.isMuted;
      })
      .addCase(changeEditorIsMuted, (state, _action) => {
        state.editorMuted = !state.editorMuted;
      })
      .addCase(setColorMode, (state, action) => {
        state.colorMode = action.payload.colorMode;
      })
      .addCase(changeIsPaused, (state, _action) => {
        state.isPaused = !state.isPaused;
      })

      .addCase(setShouldPlay, (state, _action) => {
        state.shouldPlay = _action.payload.shouldPlay;
      })
      .addCase(changeIsDarkMode, (state, _action) => {
        state.darkMode = !state.darkMode;
      });
  },
});

export default userInterfaceSlice.reducer;
