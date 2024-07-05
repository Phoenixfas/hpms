import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: "",
  role: "",
  value: false,
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.value = true;
      state.admin = actions.payload.admin;
      state.role = actions.payload.role;
    },
    logout: (state) => {
      state.value = false;
      state.admin = "";
      state.role = "";
    }
  },
});

const persistConfig = {
  key: 'loginSlice',
  storage,
};

export const { login, logout } = loginSlice.actions;

const persistedMySlice = persistReducer(persistConfig, loginSlice.reducer);

export default persistedMySlice;