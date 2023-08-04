import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 'root' key로 로컬스토리지에 저장
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ user: userReducer });

//persistConfig, rootReducer 합치면 store 생성할 때 persistedReducer에 저장
const persistedReducer = persistReducer(persistConfig, rootReducer);

// persistReducer 불러올 때 옵션주기
export const store = configureStore({
  reducer: persistedReducer,
});
