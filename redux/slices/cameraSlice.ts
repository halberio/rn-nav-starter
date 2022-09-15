import {createAction, createSlice} from '@reduxjs/toolkit';

export type CameraState = {
  cameraEnabled: boolean;
};

const initialState: CameraState = {
  cameraEnabled: false,
};

export const setCameraEnabled = createAction<{cameraEnabled: boolean}>(
  'setCameraEnabled',
);

const cameraSlice = createSlice({
  name: 'cameraReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setCameraEnabled, (state, action) => {
      state.cameraEnabled = action.payload.cameraEnabled;
    });
  },
});

export default cameraSlice.reducer;
