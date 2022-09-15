import {createAction, createSlice} from '@reduxjs/toolkit';
import {storage} from '../../mmkvStorage';
import {IUserType} from '../../types/users/userType';

export type UserState = {
  isLoggedIn: boolean;
  user: IUserType | null;
  token: string | null;
  isLoginOut?: boolean;
};

const initialState: UserState = {
  isLoggedIn: false,
  isLoginOut: false,
  user: null,
  token: null,
};

export const updateUser = createAction<{user: IUserType}>('updateUser');

export const loginUser = createAction<{user: IUserType; token: string}>(
  'loginUser',
);
export const logoutUser = createAction<undefined>('logoutUser');
export const setIsLoggingOut = createAction<{isLoginOut: boolean}>(
  'setIsLoggingOut',
);

const authSlice = createSlice({
  name: 'authReducer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //login
      .addCase(loginUser, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        storage.set('token', action.payload.token);
      })
      //update
      .addCase(updateUser, (state, action) => {
        state.user = action.payload.user;
      })
      //logout
      .addCase(logoutUser, state => {
        state.isLoginOut = true;
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
        state.isLoginOut = false;
        storage.delete('token');
      })
      .addCase(setIsLoggingOut, (state, action) => {
        state.isLoginOut = action.payload.isLoginOut;
      });
  },
});

export default authSlice.reducer;
