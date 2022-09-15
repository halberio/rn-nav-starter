import {createAction, createSlice} from '@reduxjs/toolkit';

export type UIState = {
  isUpdating: boolean;
};

const initialState: UIState = {
  isUpdating: false,
};

export const changeIsUpdating = createAction<{isUpdating: boolean}>(
  'changeIsUpdating',
);

const updateProfileSlice = createSlice({
  name: 'updateProfileReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeIsUpdating, (state, action) => {
      state.isUpdating = action.payload.isUpdating;
    });
  },
});

export default updateProfileSlice.reducer;
