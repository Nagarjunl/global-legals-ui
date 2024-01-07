import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "../reducers/rootReducer";
import { authApi } from '../services/authAPI';
import { userApi } from '../services/userAPI';
import { fileUploadApi } from '../services/fileUploadAPI';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "registeredMail", "user", "formType", "superUser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }).concat(
          authApi.middleware,
          userApi.middleware,
          fileUploadApi.middleware,
        ),
    persistedReducer,
})

export const persistor = persistStore(store);
