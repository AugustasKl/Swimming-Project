import { configureStore } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "store/reducers";
import { useDispatch } from "react-redux";

const createNoopStorage = () => {
  return {
     getItem(_key: any) {
        return Promise.resolve(null);
     },
     setItem(_key: any, value: any) {
        return Promise.resolve(value);
     },
     removeItem(_key: any) {
        return Promise.resolve();
     },
  };
};
const storage = typeof window !== 'undefined' ? createWebStorage('session') : createNoopStorage();

const persistConfig = {
  key: "data",
  storage,
  whitelist: ["answers"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
