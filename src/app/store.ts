import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { combineReducers } from "redux";
import { paginationModel } from "src/entities/pagination";
// import { cryptoApi } from "src/shared/api";

const rootReducer = combineReducers({
  ...paginationModel.reducer,
  // [cryptoApi.reducerPath]: cryptoApi.reducer,
});

const createStore = (preloadedState: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    // middleware(getDefaultMiddleware) {
    //   return getDefaultMiddleware().concat(cryptoApi.middleware);
    // },
  });
};
let store: any;
export const initializeStore = (preloadedState: any) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  if (typeof window == "undefined") {
    return _store;
  }
  if (!store) store = _store;

  return store;
};

export const useStore = (initializedStore: any) => {
  return useMemo(() => initializeStore(initializedStore), [initializedStore]);
};
