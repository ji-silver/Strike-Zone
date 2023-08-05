import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "./userSlice";
import recordSlice from "./recordSlice";

import storage from "redux-persist/lib/storage";

// 'root' key로 로컬스토리지에 저장
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ user: userReducer, record: recordSlice });

//persistConfig, rootReducer 합치면 store 생성할 때 persistedReducer에 저장
const persistedReducer = persistReducer(persistConfig, rootReducer);

// persistReducer 불러올 때 옵션주기
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
