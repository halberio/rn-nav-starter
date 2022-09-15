import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';
import {storage} from '../mmkvStorage';
import addPostUISlice from './slices/addPostUISlice';
import authSlice from './slices/authSlice';
import cameraSlice from './slices/cameraSlice';
import drawerSlice from './slices/drawerSlice';
import editorVideoSlice from './slices/editorVideoSlice';
import interactionsSlice from './slices/interactionsSlice';
import locationsSlice from './slices/locationsSlice';
import searchSlice from './slices/searchSlice';
import supportPostSlice from './slices/supportPostSlice';
import updateProfileSlice from './slices/updateProfileSlice';
import userInterfaceSlice from './slices/userInterfaceSlice';

const rootReducer = combineReducers({
  authReducer: authSlice,
  supportPostReducer: supportPostSlice,
  interactionsReducer: interactionsSlice,
  drawerReducer: drawerSlice,
  userInterfaceReducer: userInterfaceSlice,
  addPostUIReducer: addPostUISlice,
  locationsReducer: locationsSlice,
  updateProfileReducer: updateProfileSlice,
  editorVideoReducer: editorVideoSlice,
  searchReducer: searchSlice,
  cameraReducer: cameraSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'iReveal-appli-key-v0.9221',
  version: 1,
  storage: reduxStorage,
  blacklist: [
    'cameraReducer',
    'postsReducer',
    'addPostUIReducer',
    'supportPostReducer',
    'drawerReducer',
    'interactionsReducer',
    'updateProfileReducer',
    'editorVideoReducer',
  ], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
