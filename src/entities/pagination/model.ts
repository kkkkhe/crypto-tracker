import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createBaseSelector } from "src/shared/lib/redux-std";

const entityName = "pagination";
const initialState = {
  page: [],
  currentItems: null,
  itemOffset: 0,
};
type State = typeof initialState;
const slice = createSlice({
  name: entityName,
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setCurrentItems(state, action) {
      console.log(action.payload);
      state.currentItems = action.payload;
    },
    setItemOffset(state, action) {
      state.itemOffset = action.payload;
    },
  },
});

const baseSelector = createBaseSelector<State>(entityName);

const page = createSelector(baseSelector, (state) => state.page);
const currentCoins = createSelector(
  baseSelector,
  (state) => state.currentItems
);
const itemOffset = createSelector(baseSelector, (state) => state.itemOffset);
export const selectors = {
  page,
  currentCoins,
  itemOffset,
};

export const actions = {
  setPage: slice.actions.setPage,
  setCurrentItems: slice.actions.setCurrentItems,
  setItemOffset: slice.actions.setItemOffset,
};

export const reducer = { [entityName]: slice.reducer };
