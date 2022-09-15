import {createAction, createSlice} from '@reduxjs/toolkit';

export type UIState = {
  isOpened: boolean;
};

const initialState: UIState = {
  isOpened: false,
};

export const changeDrawerIsOpened = createAction<UIState>(
  'changeDrawerIsOpened',
);

const drawerSlice = createSlice({
  name: 'drawerReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeDrawerIsOpened, (state, action) => {
      state.isOpened = action.payload.isOpened;
    });
  },
});

export default drawerSlice.reducer;
